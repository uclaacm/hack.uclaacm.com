---
date: 2021-04-26
title: Introduction to WebRTC
subtitle: JavaScript Chats Hack Session 4 Spring 2021 
description: >
  The first taste of WebRTC by building a video/audio application. 
---

## Building a WebRTC app

# TODO insert recorded demo

Let's build this app ourselves! We have created some starter code for you to
follow along. Download it here: 

[WebRTC video/audio app starter
code](https://github.com/uclaacm/js-chats-s21/blob/main/webrtc/starter.zip)

To set it up, run 
```bash
npm install
node server.js
```

Then, visit `localhost:3000`.

The starter code already has the built-in functionality of showing online
users. There is also a class called `RelayServer` that acts as our signaling
service to communicate the necessary setup information for initial connection
between the peers. 

What information do we need in order to establish a connection?  Both peers
will need the following information: 
- My own public IP
- My own video/audio encoding information (media information)
- The other's public IP
- The other's video/audio encoding information

In the code walk-through, we will use the following table to keep track of the
information available to establishing the WebRTC connection.

| Peer 1 (Caller)     | Peer 2 (Callee)     |
| ------------------- | ------------------- |
| My public IP        | My Public IP        |
| My own media info   | My own media info   |
| Peer 2's public IP  | Peer 1's public IP  |
| Peer 2's media info | Peer 1's media info |

Once all the items of the table are available, a connection can be established. 

WebRTC specifies a set of APIs that are implemented by browsers. These APIs
significantly reduce the amount of code we have to write and we do not need to
care about the implementation details of the protocols. 

### STUN server and the `RTCPeerConnection` Object

The starting point of our WebRTC connection is the `RTCPeerConnection` object. 

```js
const rtcConnection = new RTCPeerConnection({
    iceServers: [
        {
            urls: 'stun:stun.stunprotocol.org'
        }
    ]
});
```

The `RTCPeerConnection` object represents our connection. The object provides
useful functions for us to get and set necessary information for setting up the
connection. 

We need a STUN server to tell us about our public IP. Here, we are using a
public STUN server with the domain name of stun.stunprotocol.org. There are
also other public STUN servers available as well.

The nice thing about WebRTC is that the APIs abstract away the details of
handling communication with STUN servers and with peers. We do not need to
handle the request to obtain our public IP ourselves. The `RTCPeerConnection`
object will handle it for us. 

So far, we have obtained these information for the connection:

| Peer 1 (Caller)     | Peer 2 (Callee)     |
| ------------------- | ------------------- |
| My public IP ✅      | My Public IP ✅      |
| My own media info   | My own media info   |
| Peer 2's public IP  | Peer 1's public IP  |
| Peer 2's media info | Peer 1's media info |

### Turning on our camera and microphone

Before we can start calling, we need to make sure our camera and microphone
works by obtaining the "streams" from these hardware. The `setUpMyVideo`
function handles the set up of the media streams. 

```js 
const setUpMyVideo = async () => {
};
```

First, we need to obtain the user's permission to use their camera and microphone. 

```js
// obtain video/audio permission
const constraints = {
    audio: true,
    video: true
};
const stream = await navigator.mediaDevices.getUserMedia(constraints);
```

If you do not want audio, you can set `audio: false`. The `getUserMedia`
function will prompt the user for the permission to use their camera and
microphone. It returns a Promise (that's why we `await` for it) that resolves
to the media stream. 

Then, we need to show the user their own video. We need to hook up our stream
to a `<video>` tag on the DOM. 

```js
document.querySelector('#localVideo').srcObject = stream;
```

Lastly, we need to tell our RTC connection object about the available streams
that we can send over to our peer. 

```js
stream.getTracks().forEach(track => rtcConnection.addTrack(track));
```

The `getTracks` method returns the two tracks that we have, the audio track and
the video track. We pass them to the RTC connection object using the method
`addTrack`.

The complete function looks like this:

```js 
const setUpMyVideo = async () => {

    // obtain video/audio permission
    const constraints = {
        audio: true,
        video: true
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    // set the camera video to show in a <video> tag!
    document.querySelector('#localVideo').srcObject = stream;

    // tell our RTC Connection about our video source
    stream.getTracks().forEach(track => rtcConnection.addTrack(track));
};
```

### Caller ringing our callee 

In the skeleton code, the ID of the selected peer being called is stored in a
global variable `selectedUser`. When caller clicks the call button, we
initialize the process of starting a WebRTC connection.  

```js
callButton.addEventListener('click', async () => {
});
```

The first step for the caller is to "ring" the callee to let callee know about
the call. The "ringing" is represented by an "offer" object.

```js
const localOffer = await rtcConnection.createOffer();
```

According to the [MDN
documentation](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer),
the "offer" object contains: 

> information about any MediaStreamTracks already attached to the WebRTC
> session, codec, and options supported by the browser, and any candidates
> already gathered by the ICE agent...

This contains all the information about of media, i.e. our video/audio stream.
Then, we need to inform caller's RTC connection object about the current media
info. 

```js
await rtcConnection.setLocalDescription(new RTCSessionDescription(localOffer));
```

The name `setLocalDescription` implies that we are setting our own media
information.

You might be asking, why are we doing this? Why did we obtain all the media
information from caller's connection object and then hand it right back to it?
`setLocalDescription` allows you to change the configuration in the middle of a
call (turn off video, or change input device for instance). Instead of making
this configuration implicit, might as well make it explicit for the initial
connection as well.  That's why there is an extra step to set it at the
beginning. 

At this point, we got the media information for our caller. 

| Peer 1 (Caller)     | Peer 2 (Callee)     |
| ------------------- | ------------------- |
| My public IP ✔️      | My Public IP  ✔️     |
| My own media info ✅ | My own media info   |
| Peer 2's public IP  | Peer 1's public IP  |
| Peer 2's media info | Peer 1's media info |

Then, we send our media info to our peer through the relay server, aka our
signaling service.

```js
relayServer.sendPeerMediaOffer(selectedUser, localOffer);
```

The complete event listener looks like this:

```js
callButton.addEventListener('click', async () => {
    callButton.disabled = true; 

    // create a connection offer, which contains our video/audio info
    const localOffer = await rtcConnection.createOffer();

    // tell our connection object about our video/audio info
    await rtcConnection.setLocalDescription(new RTCSessionDescription(localOffer));

    // tell our callee about our video/audio info
    relayServer.sendPeerMediaOffer(selectedUser, localOffer);
});
```

### Callee picking up the call from caller

The callee knows the caller is calling when the callee receives the "offer"
object from callee through the relay server:

```js
relayServer.onPeerSendMediaOffer(async data => {
});
```

The first step is to tell callee's connection object about the peer's media
information. 

```js
const peerOffer = data.offer;
await rtcConnection.setRemoteDescription(new RTCSessionDescription(peerOffer));
```

The name `setRemoteDescription` implies we are setting our peer's media
information. 


| Peer 1 (Caller)     | Peer 2 (Callee)       |
| ------------------- | --------------------- |
| My public IP ✔️      | My Public IP  ✔️       |
| My own media info ✔️ | My own media info     |
| Peer 2's public IP  | Peer 1's public IP    |
| Peer 2's media info | Peer 1's media info ✅ |

Then, we need to create an "answer" object that will be sent back to the caller. 
The answer object, just like the offer object, also contains all the media information. 
We need to tell callee's connection object about it as well. 

```js
await rtcConnection.setLocalDescription(new RTCSessionDescription(answer));
```

| Peer 1 (Caller)     | Peer 2 (Callee)       |
| ------------------- | --------------------- |
| My public IP ✔️      | My Public IP  ✔️       |
| My own media info ✔️ | My own media info ✅   |
| Peer 2's public IP  | Peer 1's public IP    |
| Peer 2's media info | Peer 1's media info ✔️ |

We sent out answer back to our peer. 

```js
relayServer.sendPeerMediaAnswer(data.from, answer);
```

The complete handler is the following:

```js
relayServer.onPeerSendMediaOffer(async data => {
    console.log('receive MediaOffer', data);
    // caller's video/audio info
    const peerOffer = data.offer;

    // tell our connection object about the caller's video/audio info
    await rtcConnection.setRemoteDescription(new RTCSessionDescription(peerOffer));

    // create a connection answer, which contains our video/audio info
    const answer = await rtcConnection.createAnswer();

    // tell our connection object about our video/audio info
    await rtcConnection.setLocalDescription(new RTCSessionDescription(answer));

    // tell our caller about our video/audio info
    relayServer.sendPeerMediaAnswer(data.from, answer);
});

```

### Caller confirming callee's pick up

The caller will receive the answer object from the callee, meaning they are
picking up that call. 

```js
relayServer.onPeerSendMediaAnswer(async data => {
    console.log('receive MediaAnswer', data);
    // tell our connection about the callee's video/audio info
    await rtcConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
});
```

| Peer 1 (Caller)       | Peer 2 (Callee)       |
| --------------------- | --------------------- |
| My public IP ✔️        | My Public IP  ✔️       |
| My own media info ✔️   | My own media info     |
| Peer 2's public IP    | Peer 1's public IP    |
| Peer 2's media info ✅ | Peer 1's media info ✔️ |

### Network information exchange 

The only piece missing in setting up the connection is knowing the peer's
public IP address. But as we have said before, WebRTC handles all the public IP
fetching with the STUN server. How do we actually get our own public IP and
send it to our peer?

To do so, we use the `onicecandidate` event handler on the WebRTC connection
object.

```js
rtcConnection.onicecandidate = event => {
    // send our peer about our connection preference.
    if (event.candidate)
        return;
};
```

When our WebRTC connection object obtains the public IP from the STUN server,
this event handler is invoked. All we need to do is to send our network
information to the other peer. 

```js
rtcConnection.onicecandidate = event => {
    // send our peer about our connection preference.
    if (event.candidate)
        relayServer.sendIceCandidateToPeer(selectedUser, event.candidate);
};
```

On the peer side, we will receive the ICE candidate hand it to the WebRTC
connection object.

```js
relayServer.onPeerSendIceCandidate(async data => {
    console.log('receive ICE from peer', data);
    // create an ICE candidate object
    const candidate = new RTCIceCandidate(data.candidate);
    // tell our RTC connection object about our peer's ICE candidate
    await rtcConnection.addIceCandidate(candidate);
});
```

At this point, we have obtained all ~~the dragon balls~~ the information we
need to establish our connection. 

| Peer 1 (Caller)       | Peer 2 (Callee)       |
| --------------------- | --------------------- |
| My public IP ✔️        | My Public IP  ✔️       |
| My own media info ✔️   | My own media info     |
| Peer 2's public IP ✅  | Peer 1's public IP ✅  |
| Peer 2's media info ✔️ | Peer 1's media info ✔️ |


### Hooking up peer's media stream

Now that the WebRTC connection object obtained all the necessary information,
it will go ahead and establish the connection and we do not have to worry about
how it is done. 

When the connection is established, there will be a stream of the peer's
audio/video. We need to show the audio/video still. 

```js
rtcConnection.addEventListener('track', event => {
    console.log('got track', event.streams);
    const [stream] = event.streams;
    // put our peer's stream onto our video
    document.querySelector('#remoteVideo').srcObject = stream;
});
```

Now you have a fully functioning video calling app yo~

Notice that throughout the process, we do not know what is going on with the
`relayServer`. In our demo, we used WebSocket to pass the information to our
peer. But again, it does not matter what technology you use in the signaling
server as long as it delivers all the necessary information to the other user.

## Challenge to improve our app

Here are some challenges for you to further improve our app.
Number of ★ indicate difficulty. 
1. (★) When the caller calls, the callee just pick up by default.  We did not
   actually let the user choose whether to pick up or not.  Can you obtain the
   callee's user consent through a pop up first before "answering" the call?
   (a simple implementation of pop up is the built-in `confirm` function)
2. (★★★) If your peer gets annoying, can you mute them? (hint: maybe by manipulating 
   the `<video>` element?)
3. (★★★★★) If you are talking to someone else, can you mute yourself? 

## WebRTC beyond video calling

WebRTC actually supports sending any arbitrary data format. So there are a lot
of other application of WebRTC as well. Here, I would like to show you a very
simple yet useful WebRTC application that smartly makes use of its mechanism. 

[snapdrop.net](https://snapdrop.net) is a simple web application that allows
you to transfer arbitrary files across devices under the same network (the same
WiFi or ethernet for example) that is behind the same NAT. For those who uses
Apple devices, this is simply AirDrop, but it works on any device with a
browser that supports WebRTC.

How does it work then? 

1. When a user logins into the server, the server keeps a dictionary of public IP to 
   a list of private IPs.
2. The user will be able to see other users under the same public IP, meaning that 
   they are under the same network.
3. Since they are under the same network, they can connect to each other directly 
   with their private IP. A WebRTC connection is established directly between the 
   two user and the data is transmitted that way.

Note that the traffic between the user does not get onto the Internet at all!
The connection is established through the same WiFi/ethernet router that the 2
devices are connected to. This brings great performance since the connection
path is short, meaning there is low latency and it does not put much traffic
pressure onto the Internet or get bottlenecked by the outside Internet. 


You can read the source code to find out how they do it, it is not that long
actually! Focus on two files: "server/index.js" and
"client/scripts/network.js".

This is the benefit brought by WebRTC, super cool right?
