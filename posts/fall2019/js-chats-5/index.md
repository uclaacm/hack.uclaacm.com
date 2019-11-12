---
date: 2019-11-12
title: 'Multi-threading in JavaScript: Worker Threads'
subtitle: 'JavaScript Chats with ACM Hack Session 5'
---

## An overview of multi-threading

For the past decade, computer-makers have realized that there are physical
limits to the performance of a CPU.
At some point, newer CPUs can no longer process each instruction much faster
than the previous generation of CPUs – and it is clear that we are nearing
that point.
The key to increasing computer performance then rests in the ability to
process multiple instructions simultaneously by packing more “cores” onto
each individual CPU, rather than making each core faster.

Unfortunately, programs designed to run on a single thread (or CPU core) are
unable to automatically take advantage of the increasing number of cores on a
system.
One of the reasons for this is the problem of synchronization.
Single-thread programs assume a _linear order of execution_; to wit, with the
following piece of JavaScript code, we expect “Alonso” to be printed before
“Bellinger.”

```js
console.log('Alonso');
console.log('Bellinger');
```

Now consider the case where this program runs in a _multi-threaded_ fashion,
with each of these statements running on a different core. 
There then would be no guarantee to the order of output: the first statement
could finish later than the second, or it could start later but finish
sooner, or it could even run just as expected, starting and finishing before
the second statement runs.
To recover the single-threaded behavior, we’d have to make the two CPU cores
synchronize with each other before and after statement – which essentially
defeats the purpose of using multiple cores.

Even though multi-threading doesn’t work too well with this application, as
we will soon see, there are many JavaScript programs where multi-threading is
able to provide a huge boost in performance.
It does however take a human – not a machine – to identify if and how
multi-threading could improve the performance.

## Different kinds of multi-threading

Different programming languages support multi-threading differently.

Many traditional languages like C, C++, and Java all support **shared-memory
multi-threading**.
In this régime, two threads belonging to the same program have access to the
same variables.
A thread can modify variables and other in-memory objects that belong to
another thread.

On the other hand, JavaScript (until very recently) does not support
shared-memory multi-threading at all.
In JavaScript traditionally, for two threads to communicate with each other,
they have to explicitly send “messages” to the other thread.
Any objects that are sent through the communication channel are copied, so
there is no way for two JavaScript threads to read the memory of the other
thread.

> Question: What are some pros and cons for each approach of multi-threading?
> Why do you think JavaScript doesn’t use shared-memory multi-threading?
>
> <details><summary>Here is an answer.</summary>
>
> Shared-memory multi-threading is easy to get started with. You pretty much
> do the same things as regular single-threaded programs.
> There is very little overhead when using single-threaded programs: no need
> to clone objects like one does in JavaScript, etc.
>
> However, shared-memory multi-threading requires explicit synchronization
> (spinlocks and mutexes) in order to avoid race conditions.
> Even with locking, it’s easy to introduce bugs into a program.
>
> From the very beginning, JavaScript is designed to be robust.
> There are no undefined behaviors in the language, unlike C and C++.
> Shared-memory multi-threading introduces the possibility to do Very Bad
> Things™ to the program, and so browsers decided not to take that path when
> introducing the feature.
>
> </details>

## Creating a Web worker

Enough talk. Let’s spawn a thread in JavaScript.
We will use the [Web Workers API][MDN-web-workers-api] that exists in web
browsers, though Node.js provides a very similar API through its
[`worker_threads`][Nodejs-worker_threads] module.

```html
<!-- index.html -->
<!doctype html>
<body>
  <script>
  console.log('Before spawning a worker');
  const worker = new Worker('worker.js');
  console.log('After spawning a worker');
  </script>
</body>
```

```js
// worker.js
console.log('We are in a worker!');
```

Visiting `index.html` would result in the following being printed in the
DevTools console:

```
Before spawning a worker
After spawning a worker
We are in a worker!
```

When we get into the DevTools in the Sources tab, we see that there is now a
“Threads” section there is now a worker.

Recall from [session 2][jschats-async] that every JavaScript environment in
the browser has an event loop.
If a task runs for too long, it could make the whole page unresponsive.
Indeed, if we were to put an infinite loop in the `<script>` element in the
HTML file, we do indeed see that the page stopped responding.
The task on the main thread has _blocked the event loop_.

```diff
 <body>
+  <button>Test</button>
   <script>
   console.log('Before spawning a worker');
   const worker = new Worker('worker.js');
   console.log('After spawning a worker');
+
+  while (true) continue;
   </script>
 </body>
```

However, if we put the loop in `worker.js` instead, the page would still
responsive.
This tells us that **each worker thread gets its own event loop**.

## Inter-thread communication

As mentioned earlier, to communicate between threads, the Web Workers API
generally requires the use of message-passing.
Here’s an example.

```js
// part of index.html
const worker = new Worker('worker.js');
// When a message is received from the worker thread…
worker.onmessage = msg => {
  console.log('Received message from the worker:', msg.data);
};
```

```js
// worker.js
setInterval(() => {
  // Send a message to the main thread.
  postMessage('hello world!');
}, 500);
```

We observe that every 500 ms (or every half-second), the text
“Received message from the worker: hello world!”
gets printed to the JavaScript console.
Here, we are sending messages from the worker thread to the main thread.

We can send objects too, not just strings:

```js
// worker.js
setInterval(() => {
  postMessage({
    timestamp: Date.now(),
    status: 'Healthy'
  });
}, 500);
```

And now we see that the object gets printed to the console through the
`worker.onmessage` function.

Similarly, we can pass messages from the main thread to the worker thread, by
calling `worker.postMessage()` from the main thread and setting the
`self.onmessage` event handler in the worker.

## Structured serialization/deserialization

Let’s now try something a bit trickier. Let’s modify the object sent from the
worker thread.

```js
// part of index.html
const worker = new Worker('worker.js');
worker.onmessage = msg => {
  const obj = msg.data;
  obj.count += 1;
};
```

```js
// worker.js
const obj = { count: 0 };
setInterval(() => {
  console.log(obj.count);
  postMessage(obj);
}, 500);
```

We expect the output to be an ascending sequence of integers with a new line
printed every half-second, starting with 0.
However, what we actually observe is that a 0 is printed every half-second.

> Question: Why is this the case? (Hint: this has to do with the fact that
> JavaScript does not use shared-memory multi-threading.)

Recall that earlier we mentioned that JavaScript in general does not allow
shared-memory multi-threading.
Whenever an object is sent from the worker to the main thread (or vice versa)
as a message, the object is _copied_.

[jschats-async]: js-chats-2/
[MDN-web-workers-api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
[Nodejs-worker_threads]: https://nodejs.org/api/worker_threads.html
