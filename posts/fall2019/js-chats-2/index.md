---
date: 2019-10-15
title: Asynchronous JavaScript
subtitle: Session 2 of JavaScript Chats
description: >
  What does it mean for JavaScript to be asynchronous and event-driven? How
  do promises and callbacks work? Let’s find out in the second installment of
  JavaScript Chats with ACM Hack."
---

- [Definitions](#definitions)
- [JavaScript and asynchrony](#javascript-and-asynchrony)
- [The event loop](#the-event-loop)
  - [Framing the problem](#framing-the-problem)
  - [Starting the operation](#starting-the-operation)
  - [Getting the results back: naïve approach](#getting-the-results-back-na%c3%afve-approach)
  - [Introducing the event loop](#introducing-the-event-loop)
  - [JavaScript asynchrony in academic terms](#javascript-asynchrony-in-academic-terms)
- [Introducing JavaScript Promises](#introducing-javascript-promises)
  - [Creating Promises](#creating-promises)
  - [🍏 Application: Implementing `js›Promise.resolve()`](#%f0%9f%8d%8f-application-implementing-js%e2%80%bapromiseresolve)
  - [Consuming promises](#consuming-promises)
- [`js›async` functions](#js%e2%80%baasync-functions)

## Definitions

> What does it mean for an operation to be synchronous, or asynchronous?

Let’s first get on the same page with regards to the terminology. For the
purpose of this workshop, we define an operation to be **synchronous** or
**blocking** if the operation would wait until the desired result is
available, and then return it. A classic example for a synchronous operation
would be POSIX’s [`c›read()`] system call by default, but Java’s
[`java›InputStream.read()`] acts in a similar way. Consider, for instance,
this piece of Java code:

```java
int ch = System.in.read();
```

The `java›InputStream.read()` function would return the next byte of data on
standard input directly. On the other hand, if the standard input is
connected to a terminal and the user does not type anything, then this
function is essentially going to wait – and _block_ your application –
forever. Assuming your application is single-threaded, there is no way for it
to do any work until the user types something.

On the other end of the spectrum, we have **asynchronous**, or
**non-blocking**, operations. The defining characteristic of this class of
operations is that they would _not_ wait for data to become available, but
variations exist on how data is actually delivered. Some, like POSIX’s
[`c›read()`] system call using non-blocking mode, returns an error if the
data is not yet available or the data if it is. Others, like many APIs found
in JavaScript, would notify the application when the data becomes available
at a future time.

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
the `js›fetch()` operation had been synchronous, then the main JavaScript
thread would not be able to execute any code until `js›fetch()` returns.

If we give this a moment of thought, it could seem quite disastrous. Imagine
trying to watch a 2-hour-long movie on YouTube, where the page tries to
`js›fetch()` the video. Because `js›fetch()` blocks JavaScript execution,
**the entire page would freeze until the movie download completes**! In other
words, such a `js›fetch()` function wouldn’t be too different from an
infinite loop: it would block even visual updates like scrolling from
working.

<div align=center>

![A synchronous operation, illustrated by three parallel timelines of network
card usage, CPU usage, and JavaScript busyness](images/sync.png)

_A synchronous `js›fetch()`._
</div>

Now, onto the second point. If `js›fetch()` is synchronous, the network card
could do all the work in the background until the entire response is stored
in memory. In other words, we _delay_ CPU processing until a future point in
time, thus freeing the CPU for other tasks while the network transmission is
being completed.

On the other hand, with CPU-bound tasks like computing cryptographic hashes,
simply delaying its execution doesn’t quite help as we still need to do the
work on the main thread – only the timing would be different.

<div align=center>

![An asynchronous operation, illustrated by three parallel timelines of
network card usage, CPU usage, and JavaScript busyness](images/async.png)

_An asynchronous `js›fetch()`._
</div>

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

1. Upon the function call, an operation is started in the background, and the
   function immediately returns.
2. The JavaScript code right after the function call runs, without the
   results of the operation being available.
3. At some future time, when the operation completes, a _callback function_
   which receives the results is called.

Let’s take a deeper look at how this process works, by implementing our very
own asynchronous `js›fetch()` function. 🍏🍏🍏

### Framing the problem

The actual `js›fetch()` function in browsers returns a JavaScript
`js›Promise` object, which we will get to soon. For now, let’s try to make a
very simple `js›basicFetch()` function that takes a URL and a callback
function, and doesn’t return anything.

```js
basicFetch(url, data => {
  console.log(data);
});
```

### Starting the operation

We often say that JavaScript is a single-threaded programming language. This
is true, but only for JavaScript execution, so that we don’t have to worry
about synchronization (race conditions) and other lower-level issues.
Browsers and other JavaScript runtimes often use multi-threading and other
techniques to parallelize I/O.

With this in mind, let’s start writing this function!

```js
// This function runs in a worker thread, where we can use synchronous
// operations without blocking the main thread.
function fetchWorker(url, callback) { /* … */ }

function basicFetch(url, callback) {
  // Get an available worker thread.
  const thread = getAvailableThread();

  // Send the task type as well as the parameters to the worker thread. The
  // worker thread would then call fetchWorker(url, callback) immediately.
  thread.run(fetchWorker, url, callback);

  // The fetch has been started, so our job here is done.
}
```

### Getting the results back: naïve approach

Well, that hopefully wasn’t too difficult to understand. Let’s now write the
`js›fetchWorker()` function.

After the I/O thread finishes the task, it would need to call the JavaScript
callback function to pass the data back to JavaScript code. Let’s do that.

```js
// This function runs in a worker thread.
function fetchWorker(url, callback) {
  // Fetch the URL synchronously, and put its result in `buffer`.
  const buffer = fetchURLSync(url);
  callback(buffer);
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

```js
// This function runs in a worker thread.
function fetchWorker(loop, url, callback) {
  // Fetch the URL synchronously, and put its result in `buffer`.
  const buffer = fetchURLSync(url);

  // Assume enqueueTask() does all the synchronization (locking) necessary to
  // prevent race conditions.
  loop.enqueueTask(callback, buffer);
}
```

On the main thread, a mechanism known as the “event loop” repeatedly polls
the task queue to see if there are any outstanding tasks on the task queue.
If so, it would run the tasks in FIFO order. However, it would only do so
after the existing functions all finish executing so as to not interrupt
execution of the current JavaScript function – in other words, when the
JavaScript stack becomes empty.

Network responses is only one type of task. Web browsers have all sorts of
APIs that hook onto the event loop, like `js›setTimeout()` and DOM events.

<div align=center>
  <img src="https://i.imgur.com/rnQEY7o.png" alt="Schema of interactions
  between JavaScript, Web APIs, and the event loop" width=600><br>
  <em>JavaScript, Web APIs, and the event loop.</em>
</div>

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

## Introducing JavaScript Promises

> What are Promises in JavaScript? How do they ease asynchronous programming?

By now, we have a pretty good idea of how asynchronous programming works in
JavaScript, with callbacks. But despite all those concurrency improvements,
the programming flow really isn’t great. A phenomenon known as “[callback
hell]” is often present in callback-based code that does a series of function
calls sequentially, with callbacks inside callbacks inside callbacks:

```js
// callback hell
fs.readFile(filename, (err, file) => {
  if (err) {
    console.log('Error reading file: ' + err);
  } else {
    fs.writeFile(filename + '.new', file, err => {
      if (err) {
        console.log('Error writing file: ' + err);
      } else {
        console.log('Done!');
      }
    });
  }
});
```

Using Promises is a way to simplify that.

At its most basic level, a JavaScript `js›Promise` object is simply a
container of JavaScript value, with a state attached to it that indicates if
the operation succeeds. By default, the Promise container is empty,
indicating that the data is not yet available.

### Creating Promises

If we want to use Promises with an existing callback-based API, we can use the Promise constructor.

```js
// This Promise will become fulfilled when the fetch finishes.
new Promise(resolve => {
  basicFetch(url, resolve);
});

// This Promise becomes fulfilled when the file is fully read. If an error
// occurred, the Promise is rejected with the error.
new Promise((resolve, reject) => {
  fs.readFile(filename, (err, fd) => {
    if (err) reject(err);
    else resolve(fd);
  });
});

// This Promise will remain empty forever.
new Promise(() => {});
```

### 🍏 Application: Implementing `js›Promise.resolve()`

In addition to the `js›new Promise` API as above, JavaScript provides a
shorthand for creating a Promise that is assigned a value at creation:

```js
// This Promise is assigned the value 1 upon creation.
Promise.resolve(1);
```

How would you go about implementing this method using `js›new Promise`?

<details><summary>Answer</summary>

```js
function resolve(value) {
  return new Promise(resolve => {
    resolve(value);
  });
}
```

</details>

### Consuming promises

But unlike a usual container object, `js›Promise` objects don’t allow direct
access to the contained value. Instead, to access it or to wait for the value
to become available, one attaches a _promise reaction_ callback function
using the `js›.then()` function.

```js
// When the promise is fulfilled with a value, print it out.
promise.then(data => { console.log(data); });
```

If we were to rewrite our callback-hellish code using Promises instead, they
would look much more linear and intuitive.

```js
// Clean code with Promises
fs.readFile(filename)
  .then(file => fs.writeFile(filename + '.new', file));
  .then(() => { console.log('Done!'); })
  .catch(err => {
    console.log('An error occurred: ' + err);
  });
```

## `js›async` functions

> How do `js›async` functions further simplify asynchronous code, and how do
> they work?

Promises themselves can be pretty useful already, but their real power lies
in unlocking a new JavaScript feature called `js›async` functions. Remember
all those `js›.then()`’s? `js›async` functions give us a way of getting rid
of them.

Here’s the code that does the same thing as above… except `js›.then` doesn’t
appear:

```js
// Clean code with async
async function main() {
  try {
    const file = await fs.readFile(filename);
    await fs.writeFile(filename + '.new', file)
    console.log('Done!');
  } catch (err) {
    console.log('An error occurred: ' + err);
  }
}
main();
```

This looks really really clean. The `js›await` operator would take a Promise
object, and, well, waits until the Promise resolves and get its value. In
fact, it looks pretty much like a synchronous function, in that we could
directly get the result of an asynchronous action. But how is it possible for
this not to have the same problems as synchronous code, and not block the
entire main thread?

It turns out that there are three special things about an async function:

1. All `js›async` functions always return a Promise immediately, so calling the
   function does not directly yield the returned value, fitting our
   definition of an asynchronous operation.

2. The execution of this specific function could be suspended and restarted.
   When the `js›await` operator is encountered, only the function will be
   paused, _without blocking the rest of the main thread._ This makes
   `js›async` functions not suffer from the same problems as synchronous
   code.

3. The `js›await` operator would register special Promise reaction callbacks
   to the given Promise, which would restart that particular instance of the
   `js›async` function using the values in the Promise.

With these three things set up, `js›async` functions are able to do the
amazing things they do.

[`c›read()`]: https://pubs.opengroup.org/onlinepubs/9699919799/functions/read.html
[`java›InputStream.read()`]: https://docs.oracle.com/en/java/javase/13/docs/api/java.base/java/io/InputStream.html#read()
[callback hell]: http://callbackhell.com/
[synchronous XHR]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Synchronous_request
