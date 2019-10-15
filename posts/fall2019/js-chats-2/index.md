---
date: "2019-10-15"
title: "JavaScript Chats: Asynchronous JavaScript"
subtitle: "What does it mean for JavaScript to be asynchronous and event-driven? How do promises and callbacks work? Let’s find out in the second installment of JavaScript Chats with ACM Hack."
---

## Definitions

> What does it mean for an operation to be synchronous, or asynchronous?

Let’s first get on the same page with regards to the terminology. For the
purpose of this workshop, we define an operation to be
<def>**synchronous**</def> or <def>**blocking**</def> if the operation would
wait until the desired result is available, and then return it. A classic
example for a synchronous operation would be POSIX’s [`read()`] system call
by default, but Java’s [`InputStream.read()`] acts in a similar way.
Consider, for instance, this piece of Java code:

```java
int ch = System.in.read();
```

The `InputStream.read()` function would return the next byte of data on
standard input directly. On the other hand, if the standard input is
connected to a terminal and the user does not type anything, then this
function is essentially going to wait – and _block_ your application –
forever. Assuming your application is single-threaded, there is no way for it
to do any work until the user types something.

On the other end of the spectrum, we have **asynchronous**, or
**non-blocking**, operations. The defining characteristic of this class of
operations is that they would _not_ wait for data to become available, but
variations exist on how data is actually delivered. Some, like POSIX’s
[`read()`] system call using non-blocking mode, returns an error if the data
is not yet available or the data if it is. Others, like many APIs found in
JavaScript, would notify the application when the data becomes available at a
future time:

The main benefit of making operations asynchronous is _enabling concurrency_.
While the operation is being carried out in the background, because the
function returns quickly we could continue doing computation while waiting
for the background task to finish. We could also launch multiple asynchronous
operations at the same time.

```js
// Web browsers
fetch('https://example.com/').then(res => {
  // At some future time, when a preliminary response has been received, this
  // function will be called.
  console.log('Response status:', res.status);
});

// This will be printed first, as fetch() immediately returns after kicking off
// the HTTP request.
console.log('After call to fetch()');

// Prints:
// After call to fetch()
// Response status: 200
```

```js
// Node.js
fs.open('file.txt', (err, fd) => {
  // At some future time, when a file descriptor has been opened, this function
  // will be called.
  console.log('File descriptor opened:', fd);
});

console.log('After call to fs.open()');

// Prints:
// After call to fs.open()
// File descriptor opened: 3
```

## JavaScript and asynchrony

> Why is JavaScript asynchronous?

First, a point of clarification. People often say that JavaScript is
inherently asynchronous. But that’s not strictly true. Until the introduction
of Promises in ES2015 (also known as ES6), the JavaScript _language_ was
completely synchronous. But _embedders_ of JavaScript, like web browsers and
Node.js, have provided useful APIs that are available only in asynchronous
form.

That doesn’t quite answer our question though. Why do web browsers decide to
provide so many asynchronous APIs?

As it turns out, there are two factors that went into this design decision:

1. JavaScript is generally used in a single-threaded setting, and
2. a lot of the Web APIs listed have performance that is _I/O-bound_ rather
   than _CPU-bound_.

Let’s consider the first point. JavaScript in browsers is single-threaded, so
all of the UI updates and JavaScript execution happen on the same thread. If
the `fetch()` operation had been synchronous, then the main JavaScript thread
would not be able to execute any code until `fetch()` returns.

If we give this a moment of thought, it could seem quite disastrous. Imagine
trying to watch a 2-hour-long movie on YouTube, where the page tries to
`fetch()` the video. Because `fetch()` blocks JavaScript execution, **the
entire page would freeze until the movie download completes**! In other
words, such a `fetch()` function wouldn’t be too different from an infinite
loop.

Now, onto the second point. Using non-blocking I/O operations like `fetch()`,
the network card does all the work until the entire response is stored in
memory. In other words, we _delay_ CPU processing until a future point in
time, thus freeing the CPU for other tasks while the network transmission
happens in the background. On the other hand, with CPU-bound tasks like
computing cryptographic hashes, simply delaying its execution doesn’t quite
help as we still need to do the work – only the timing is different.

![Synchronous operation vs. asynchronous operation, illustrated by three
parallel timelines of network card usage, CPU usage, and JavaScript
busyness](images/sync-vs-async.png)

> Here’s a question for you. We’ve considered why browsers have so many
> asynchronous APIs. Can you think of why Node.js, a JavaScript runtime used
> to write servers, would be similar in that way?
>
> <details><summary>Click here for an answer.</summary>
> Node.js servers, like most web servers, are commonly expected to handle a
> large number of simultaneous requests. Synchronous operations would not
> allow for any concurrency between requests, as they require the server to
> finish one request before starting another almost by definition. This makes
> asynchrony essential.
>
> Additionally, Node.js servers are similar to the browser in that they are
> quite I/O-heavy as well. Web servers do a _lot_ of I/O, from communicating
> with the client using HTTP, to reading or writing to a file system, or
> talking to a remote database server. The ability to do I/O concurrently
> would be a great boon.
> </details>

## The event loop

> How are asynchronous operations implemented in JavaScript runtimes? 

As we have seen earlier, asynchronous operations in JavaScript generally has the following form:

1. Upon a function call, an operation is started in the background, and the
   function immediately returns.
2. The code right after the function call runs, without the results of the
   operation being available.
3. At some future time, when the operation completes, a _callback function_
   which receives the results is called.

Let’s take a deeper look at how this process works, by implementing our very
own asynchronous `fetch()` function.

### Framing the problem

The actual `fetch()` function in browsers returns a JavaScript `Promise`
object, which we will get to soon. For now, let’s try to make a very simple
`basicFetch()` function that takes a URL and a callback function, and returns
`undefined`.

```js
basicFetch(url, data => {
  console.log(data);
});
```

### Starting the operation

We often say that JavaScript is a single-threaded programming language. This
is true, but only for JavaScript execution, so that we don’t have to worry
about synchronization and other lower-level issues. Browsers and other
JavaScript runtimes often use multithreading and other techniques to
parallelize I/O.

With this in mind, let’s write a basic `fetch()` function. We are going to
use C++ for this exercise, as most APIs in modern web browsers that deal with
operating system bits are implemented in this language.

```c++
// This function runs in a worker thread, where we can use synchronous
// operations without blocking the main JavaScript thread.
void FetchWorker(std::string url, JSFunction callback);

JSValue BasicFetch(JSString url, JSFunction callback) {
  // Getting all the parameters from JavaScript:
  std::string url_str = url.AsString();

  // Get an available worker thread.
  Thread thread = GetAvailableThread();

  // Send the task type as well as the parameters to the worker thread, which
  // starts working on it immediately. The worker thread would call
  // FetchWorker(url_str).
  thread.Run(FetchWorker, url_str, callback);

  // Return to JavaScript. In reality a promise is returned, but let’s make it
  // simpler for now.
  return JSValue::Undefined();
}
```

### Getting the results back: naïve approach

Well, that hopefully wasn’t too difficult to understand. Let’s now write the `FetchWorker()` function.

After the I/O thread finishes the task, it would need to call the JavaScript
callback function to pass the data back to JavaScript code. Let’s do that.

```c++
// This function runs in a worker thread.
void FetchWorker(std::string url, JSFunction callback) {
  // Get the URL synchronously, and put its result in `buffer`.
  std::vector<char> buffer = GetUrl(url);

  // Convert the C++ data structure to a JavaScript Uint8Array object.
  callback.Call(JSValue::ToUint8Array(buffer));
}
```

But wait… This function runs on a separate thread. By calling the JavaScript
callback directly from a worker thread, we would be violating the JavaScript
single-thread constraint, and cause all sorts of race conditions in a language
not prepared to deal with multithreading. No!!!

### Introducing the event loop

> This section is also available in video form on
> https://youtu.be/cCOL7MC4Pl0?t=430. Jake Archibald can explain it several
> fold better than I can.

To solve this problem, people invented the “event loop” approach. Instead of
calling the JavaScript callback directly, the worker thread would enqueue the
callback in a task queue that belongs to the JavaScript main thread.

```c++
// This function runs in a worker thread.
void FetchWorker(Loop* loop, std::string url, JSFunction callback) {
  // Get the URL synchronously, and put its result in `buffer`.
  std::vector<char> buffer = GetUrl(url);

  // Assume Loop::EnqueueTask() does all the synchronization necessary.
  loop->EnqueueTask(callback, buffer);
}
```

On the main thread, a mechanism known as the “event loop” repeatedly polls
the task queue to see if there are any outstanding tasks on the task queue.
If so, it would run the tasks in FIFO order. However, it would only do so
after the existing functions all finish executing so as to not interrupt
execution of the current JavaScript function – in other words, when the
JavaScript stack becomes empty.

Network responses is only one type of task. Web browsers have all sorts of
APIs that hook onto the event loop, like `setTimeout()` and DOM events.

![Schema of interactions between JavaScript, Web APIs, and the event
loop](https://i.imgur.com/rnQEY7o.png)

### JavaScript asynchrony in academic terms

In systems design, this approach to asynchronous programming using event
loops is often given two epithets:

1. **Event-driven**. This essentially means that the program wouldn’t do
   anything unless a task gets queued upon an external event (like when
   network download finishes, or a timeout is up, or the user clicked a
   button).
2. **Cooperative multitasking**. JavaScript allows multitasking, but tasks
   wouldn’t get executed unless the current script finishes executing. This
   is in contrast with modern operating system schedulers, which would
   interrupt and preempt long-running threads.

## JavaScript Promises, and `async` functions

> What are Promises in JavaScript? How do they and `async` functions ease
> asynchronous programming?

### Introducing Promises

By now, we have a pretty good idea of how asynchronous programming works in
JavaScript, with callbacks. But what about Promises?

At its most basic level, a JavaScript `Promise` object is simply a container
of JavaScript value, with a state attached to it that indicates if the
operation succeeds. By default, the Promise container is empty, indicating
that the data is not yet available.

```js
// This Promise will remain empty forever.
new Promise(() => {});

// This Promise will become fulfilled when the fetch finishes.
new Promise(resolve => {
  basicFetch(url, resolve);
});
```

But unlike a usual container object, `Promise` objects don’t allow direct
access to the contained value. Instead, to access it or to wait for the value
to become available, one attaches a _promise reaction_ callback function
using the `.then()` function.

```js
// When the promise is fulfilled with an value, print it out.
promise.then(data => { console.log(data); });
```

Above, we’ve basically written a Promise-returning version of `basicFetch`:

```js
function basicFetchPromise(url) {
  return new Promise(resolve => {
    basicFetch(url, resolve);
  });
}
```

The `fetch()` function in the browser actually creates the Promise directly
in C++, but the general implementation looks more similar to this outline
than not.

Promises themselves can simplify 

[`read()`]: https://pubs.opengroup.org/onlinepubs/9699919799/functions/read.html
[`InputStream.read()`]: https://docs.oracle.com/en/java/javase/13/docs/api/java.base/java/io/InputStream.html#read()
[synchronous XHR]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Synchronous_request
