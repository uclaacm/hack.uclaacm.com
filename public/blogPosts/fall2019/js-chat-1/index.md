# Function and this

## JavaScript Chats with ACM Hack Session 1

### October 8, 2019

#### By ACM Hack

- [Function Arguments](#function-arguments)
  - [The Magic `arguments` "array"](#the-magic-arguments-%22array%22)
  - [Destructuring in Function Parameters](#destructuring-in-function-parameters)
  - [🍏Application: Building Extensible APIs](#application-building-extensible-apis)
  - [Default Parameters](#default-parameters)
  - [`function.length`?](#functionlength)
  - [🍏Application: Polyfilling](#application-polyfilling)
- [What is `this`?](#what-is-this)
  - [Implicit `this` binding](#implicit-this-binding)
  - [Explicit `this` binding](#explicit-this-binding)
  - [🍏Application: React callbacks](#application-react-callbacks)
- [ES6 arrow function](#es6-arrow-function)
  - [`this` binding in arrow function](#this-binding-in-arrow-function)
  - [No `arguments` in arrow function](#no-arguments-in-arrow-function)
  - [🍏Application: React callback revisited](#application-react-callback-revisited)
  - [Syntactic Pitfall](#syntactic-pitfall)
- [Functional Programming in JavaScript](#functional-programming-in-javascript)
  - [Functions as first-class citizens](#functions-as-first-class-citizens)
- [Final Challenge](#final-challenge)

## Function Arguments

Let's do a little exercise.

```js
function sayHello(name) {
	console.log(`Welcome to JavaScript Chat with ACM Hack, ${name}!`);
}

/* What does this output? */
sayHello('Galen');
/* Is this legal? If yes, what is the output? */
sayHello();
/* Is this legal? If yes, what is the output? */
sayHello('Tim', 0xdeadbeef);
```

<details>
<summary>Answer to the exercise</summary>

All of them are in fact legal.
The output is

```
Welcome to JavaScript Chat with ACM Hack, Galen!
Welcome to JavaScript Chat with ACM Hack, undefined!
Welcome to JavaScript Chat with ACM Hack, Tim!
```

</details>

In some other programming languages, like Python, C/C++,
this is usually forbidden. But we are free to pass in
any arbitrary number of arguments to a JavaScript function.
In fact, instead of looking at the number of named parameters,
it might be better to view the arguments to a function as an
array of arbitrary length!

### The Magic `arguments` "array"

JavaScript is very lenient about the parameters that it passes in.
In fact, the arguments are directly accessible in the function callee
as an Array-like object bound to the name
[`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).
Using this, you can in fact access all the parameters even if you do
not specify them in the parameter list.

```js
function printAllArguments() {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

printAllArguments('a', null, {}, [], 123);
/* output:
a
null
{}
[]
123
*/
```

Question: what would happen if we do this?

```js
function printAllArgumentsFunctionally() {
	arguments.forEach(arg => console.log(arg));
}
```

This is gonna give you an error saying that `forEach` is not
defined on the `arguments` objects. Why? Isn't it like an array?
Note how I use the word "array-like". `arguments` is not actually an
array, but rather it is just a plain object. It does not support all
the Array functions like `slice`, `push`, `map`, etc.
To put this in some concrete code,

```js
const myObj = {};

myObj[0] = 1;
myObj[1] = 2;
myObj[2] = 3;
myObj.length = 3;
```

Now you can iterate through `myObj` using a `for` loop just like an array.
`arguments` is just like `myObj`: they are both "array-like".

<span style="font-size: 48px"><i>Yikes~</i></span>

Yup, welcome to the world of JavaScript.

Because of these quirks, the `arguments` object is no longer the
preferred way tp access the list of arguments. ES2015 introduces
the _rest parameters_ syntax, illustrated as follows.

```js
function printAllArguments(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

function fnWithSomeNamedArguments(a, b, ...theRest) {
	return Array.isArray(theRest);
}
```

Notice that `args` and `theRest` here are actual arrays, which
makes way more sense.
Why inventing another way to do the same thing?
We will see in just a second.

When calling a function, we use the companion _spread parameters_
syntax to provide function call arguments as using an array or
multiple arrays.

```js
function sum(a, b) {
	return a + b;
}

function product(a, b, c) {
	return a * b * c;
}

const args = [1, 2];
sum(...args); // equivalent to sum(1, 2)
product(...args, 3); // equivalent to product(1, 2, 3)
product(0, ...args); // equivalent to product(0, 1, 2)
product(0, ...args, 3, ...args.reverse());
// equivalent to product(0, 1, 2, 3, 2, 1)
```

### Destructuring in Function Parameters

Some of you might have seen code like

```js
const [a, b] = foo();
const { c } = bar();
```

where `foo()` returns an array of 2 elements,
and `bar()` returns an object with key `c`.

If you are familiar with functional programming languages
such as OCaml (perhaps through CS131), this pattern should
be quite familiar to you. This is called pattern matching.

```ocaml
(* OCaml *)
let (a, b, c) = 3, 1, 4
```

```js
// JavaScript
let [a, b, c] = [3, 1, 4];
```

This is called object destructuring in JavaScript.
It can be applied to function parameters as well.

```js
// destructuring array
function sumOfPair([a, b]) {
	return a + b;
}

sumOfPair([1, 2]);
// 3

// destructuring object (with rest operator)
function apiCallWithConfig(url, { method, credentials, ...theRestOfStuff }) {
	// Do some API call...
	// theRestOfStuff is an object containing other fields
}

apiCallWithConfig('http://www.example.com', {
	method: 'GET',
	credentials: 'my-secret-password-or-cookie',
	userAgent: 'curl/7.54.0', // stored in theRestOfStuff['userAgent']
});
```

Let's take a step back from the syntactical side of things,
and think about what are the benefits you get from these
language features of JavaScript.
More specifically, let's compare these features with
respect to helping us write code with high extendibility.

### 🍏Application: Building Extensible APIs

When I say "extensible", I mean backward- and forward-compatability.
We want our API evolve and possess new capability, without having to change
old code using the API. But we also want it to be future-proof to some extent.

Let's say you are going to build an API called `makeHttpRequest`.
At the beginning, the requirement is simple.
It takes in a URL, makes a GET request, and returns some data.

```js
function makeHttpRequest(url) {
	// do something
}
```

But your boss now find out that HTTP is not safe enough.
He asks you also write another API called `makeHttpSecureRequest`
using HTTPS.

```js
function makeHttpRequest(url) {
	/* things */
}
function makeHttpSecureRequest(url) {
	/* things */
}

// usage
makeHttpRequest('foo.com');
makeHttpSecureRequest('bar.com');
```

But now, your boss realized a GET is not enough. We want to also use
other HTTP verbs like POST or DELETE.
How would you go about doing that?

Knowing the fact that we can give any arbitrary number of arguments to
a function, we can add arguments without breaking old code!

```js
function makeHttpRequest(url, method) {
	/* things */
}
function makeHttpSecureRequest(url, method) {
	/* things */
}

// ✅still works!
makeHttpRequest('foo.com');
makeHttpSecureRequest('bar.com');
```

Let's assume there is some function that call
either `makeHttpRequest` or `makeHttpSecureRequest` by some condition.

```js
function makeHttpRequest(url, method) {
	/* things */
}
function makeHttpSecureRequest(url, method) {
	/* things */
}

function makeApiCall(isSecure, url, method) {
	if (isSecure) {
		makeHttpSecureRequest(url, method);
	} else {
		makeHttpRequest(url, method);
	}
	// fine, we know you are fancier than this:
	// (isSecure ? makeHttpSecureRequest : makeHttpRequest)(url, method);
}
```

You might start to see a problem here. We are repeating the variables
`url` and `method` a lot.
Sure, we can simplify it a bit using the `arguments` array or the rest
and spread syntax.

```js
function makeApiCall(isSecure, ...callParams) {
	if (isSecure) {
		makeHttpSecureRequest(...callParams);
	} else {
		makeHttpRequest(...callParams);
	}
}
```

But your annoying boss also want a custom handler callback function
in case the TLS negotiation failed.
That's fine. We just add another parameters, right?

> For context, TLS negotiation is a process in which HTTPS establishes
> a secure connection. TLS only exists in HTTPS, not in HTTP.

```js
function makeHttpRequest(url, method) {
	/* things */
}
// changes here
function makeHttpSecureRequest(url, method, callback) {
	/* things */
}

// ✅still works!
function makeApiCall(isSecure, ...callParams) {
	if (isSecure) {
		makeHttpSecureRequest(...callParams);
	} else {
		makeHttpRequest(...callParams);
	}
}

// usage
makeApiCall(true, 'foo.com', 'POST', callback);
makeApiCall(false, 'foo.com', 'GET');
```

Now you want to add a timeout to these function so they don't
take too long. What do you do?

We add it to the back of the parameters list?

```js
function makeHttpRequest(url, method, timeout) {}
function makeHttpSecureRequest(url, method, callback, timeout) {}

// ❌breaks now!
makeApiCall(true, 'foo.com', 'POST', callback, 5000);
makeApiCall(false, 'foo.com', 'GET', 5000);
```

Then, the `...callParams` tricks no longer works.
The nature of parameter list relying on some sort of ordering is really
limiting us in evolving our API. What if we take a step back,
and consider object destructuring instead?

We rewrite our API to takes in a configuration object, instead of having
a thousand different named parameters.

```js
function makeHttpRequest(url, config) {}
function makeHttpSecureRequest(url, config) {}

function makeApiCall(isSecure, url, config) {
	if (isSecure) {
		makeHttpSecureRequest(url, config);
	} else {
		makeHttpRequest(url, config);
	}
}

// usage
makeApiCall(false, 'foo.com', { timeout: 5000, method: 'POST' });
makeApiCall(true, 'bar.com', {
	timeout: 5000,
	callback: someFunc,
	method: 'GET',
});
```

And we can pass all the options, like timeout, callback, method, within
the config object.
This pattern is called the _options bag pattern_.
Doing so makes your API better in multiple ways.

1. Your API is now more developer friendly. Developer will not need to
   remember the order of the parameters and which position they are in.
2. `config` object can now be reused by developer, which leads to cleaner
   code.
3. The `makeApiCall` function is now forward-compatible. Any addition or deletion to
   `config` does not require code changes in `makeApiCall`.

We can do one better. We can merge the `isSecure` into the `config` object as well.

```js
function makeApiCall(url, { isSecure, ...config }) {
	if (isSecure) {
		makeHttpSecureRequest(url, config);
	} else {
		makeHttpRequest(url, config);
	}
}
```

This pattern of merging different levels of configuration object is actually
very common in API designs.
For example, the `props` object within React component. You only need to know
that it is used by some child, but you do not need to care which child uses
which options.
By merging the different levels of configuration into one at the top level
API, we hide the internals of our API to the caller. The API caller do not
need to know that there are different configs. For example,

```js
// bad
function makeApiCall(url, tlsConfig, requestConfig, responseConfig) {}
```

The user don't want to know what each config options are used for,
they just need to know there are configs available.

Hopefully, at this point, I have convinced you that the options bag
pattern gives a higher degree of extensibility in building API.
Let's see some examples of real world API that uses this pattern.

```js
/* the `fetch` method */
fetch(url, {
	method: 'POST',
	body: JSON.stringify(data),
	headers: {
		'Content-Type': 'application/json',
	},
});
```

```js
/* express */
app.get('/api', function (res, req) {
	// `res` and `req` are objects
	// ...
});
```

```jsx
/* React */
function MyComponent({ name, ...props }) {
	return <ChildComponent displayName={name} {...props} />;
}
```

Next time when you see a new language feature that you have not
seen before, we hope you can see past the syntax and think about
how these impacts things such as API designs and
developer-friendliness.

### Default Parameters

We saw from the above example that function assigns `undefined`
to the named parameters if they are not provided.

```js
sayHello();
// Welcome to JavaScript Chat with ACM Hack, undefined!
```

But we can indeed specify default parameters.

```js
function sayHelloWithDefault(name = 'friends') {
	console.log(`Welcome to JavaScript Chat with ACM Hack, ${name}!`);
}

sayHello();
// Welcome to JavaScript Chat with ACM Hack, friends!
/* Notice this special case */
sayHello(undefined);
// Welcome to JavaScript Chat with ACM Hack, friends!
```

### `function.length`?

The `length` property tells us how many named arguments there are.
For example,

```js
function sumOfABC(a, b, c) {
	return a + b + c;
}

console.log(sumOfABC.length);
// 3
```

Take note that the behavior is different for default arguments, or the rest operator.

```js
function fn1(a, b, ...rest) {
	//...
}

function fn2(a, b = 1, c) {
	// ...
}

console.log(fn1.length);
// 2
console.log(fn2.length);
// 1
```

### 🍏Application: Polyfilling

Just like any other languages, JavaScript has different versions and
different features came at different times.
Different browsers and different versions of browsers have support
of different subsets of all JavaScript features. As the backing
language of the web, the correctness of code within a website really
is dependent on the browser.

> Side note: there is a great website called caniuse.com.
> You can see what features, including HTML, CSS and JavaScript,
> are available in what browsers.

For instance, the rest syntax (`...args`) we saw above is only compatible with
92.84% of all users' browsers in the world.
(src: https://caniuse.com/#feat=rest-parameters).
The reason is that this is a ES6 feature, and not all browsers have full support
for that version of JavaScript (ahem IE 11).

Therefore, we need some code changes to make sure that our code
works with existing browsers, but we also want to write code in the nicer
way of the rest syntax. You decide to write a simple automatic code
replacer that replace the spread syntax to something that is backwards-compatible.

Given this code

```js
function fn1(a, b, ...rest) {
	// function body
}
```

With features that we have seen so far,
can you remove and the rest arguments (`...rest`) from the function
parameter list, and add some code at the beginning of the function `fn1`
such that the `rest` arguments are available later to the code in the
function body? This way, we don't need to rewrite the code in our function
body.

To get you started,

```js
function fn1(a, b) {
	// insert your code here
	// `rest` should be available by now
	// function body
}
```

<details>

<summary>Click to see a simple solution</summary>

```js
function fn1(a, b) {
	var rest = [];
	for (let i = fn1.length; i < arguments.length; i++) {
		rest.push(arguments[i]);
	}
	// function body
}
```

</details>

Does the simple version works for all cases?
Can you think of a case where our solution will not work?

<details>
<summary>Click to see a case that does not work</summary>

```js
function fn2(a = 0, b) {
	var rest = [];
	// fn2.length here returns 0;
	for (let i = fn2.length; i < arguments.length; i++) {
		rest.push(arguments[i]);
	}
}
```

</details>

For these more complex cases, we will need to do better
than a naive replacement. We will need to do some syntactic
analysis, probably involving generating an abstract syntax
tree (AST). But don't worry, these are the jobs of a transpiler
like [Babel](https://babeljs.io/).
We never have to do it ourselves.

By the way, this process of making JavaScript code compatible
with older browsers is called _polyfilling_.

## What is `this`?

I am not going to get into object oriented programming
here. We are only care about using the `this` pointer to
access the object itself in some methods.
Again, let's start with a little exercise.

```js
const a = {
	username: 'Galen',
	getNameInsideA: function () {
		console.log(this.username);
	},
	getAgeInsideA: function () {
		console.log(this.age);
	},
};

const getNameOutsideA = a.getNameInsideA;
const getAgeOutsideA = a.getAgeInsideA;

// what is the output?
a.getNameInsideA();
getNameOutsideA();
var age = 19;
a.getAgeInsideA();
getAgeOutsideA();
```

<details>
<summary>Click to see answer</summary>

```
Galen
undefined
undefined
19
```

</details>

The first time I encounter the binding of `this` was a horrible
experience. I could not figure out how `this` would work.
Let's understand how the `this` binding works together.

The `this` value could be bound either implicitly or explicitly.

1. implicit binding: at call time as the object on which the function is called
2. explicit binding: using one of the `apply`, `call`, and `bind` methods

### Implicit `this` binding

The `this` value is bound when it is called – not when the function
is defined . The value of `this` is determined by the "context"
of the function call, where "context" refers to the obejct it
is called on.

```js
a.getNameInsideA();
```

`a` is the "context object" here. Therefore, `this` is bound to `a`
in `getNameInsideA`.

But what if there is no such "context"?

```js
getNameOutsideA();
```

Usually, `this` will get bound to the global object when the "context"
is missing. They refer to different values in different runtime,
namely browser (where it is `window`) vs Node.js.
But it does not really matter to us what it binds to. We just have
to know that it is bound to some value.

One weird property of JavaScript is that when you declare a variable
with the `var` at the top level, that variable is put into the global object.

```js
var magic = 123456;
console.log(globalThis.magic);
// globalThis refers to the global object in all runtimes
```

That is why the call to `getAgeOutsideA()` prints 19.

<span style="font-size: 48px"><i>Yikes~</i></span>

Again, welcome to the world of JavaScript.

### Explicit `this` binding

There are three built-in methods, `call`, `apply` and `bind`, to
help us explicitly set the value of `this`.

The `call` method let us set the `this` object and call the function.

```js
const tim = { username: 'Tim' };
function sayHi(withEmoji) {
	if (withEmoji) {
		console.log('Hi,', this.username + '. 😀');
	} else {
		console.log('Hi,', this.username + '.');
	}
}

sayHi.call(tim, false);
// Hi, Tim.
```

The `apply` function in fact is just the same as `call` but
we pass in the list of arguments as an array instead.

```js
sayHi.apply(tim, [false]);
// Hi, Tim.
```

A trick to remembering apply and call:

- **A**[pply] for array
- **C**[all] for comma (separated)

(found from: https://medium.com/@ginalee1114/javascript-technical-questions-series-what-is-bind-call-apply-what-is-this-7bd29fe06ded)

> Exercise: Can you implement `apply` with `call`?

The `bind` function creates a new function that has `this`
bound to the given value. Then, `this` will never change
again. No matter if you use `apply`, `call`, or implicit
binding.
It does not alter the original function.

```js
const galen = { username: 'Galen' };
const sayHiToTim = sayHi.bind(tim);
sayHiToTim(true);
// Hi, Tim. 😀
sayHiToTim.call(galen, true);
// Hi, Tim. 😀
galen.sayHi = sayHiToTim;
galen.sayHi();
// Hi, Tim. 😀
```

> Harder Exercise: Can you implement `bind` with `apply` with `call`?

### 🍏Application: React callbacks

If you have used React before, you might have used `bind`:

```jsx
class MyComponent extends React.Component {
	constructor() {
		this.state = { count: 0 };
		// focus on the following line
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	incrementCounter() {
		const currentCount = this.state.count;
		this.setState({ count: currentCount + 1 });
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>count: {count}</h1>
				<button onClick={this.incrementCounter}> plus 1 </button>
			</div>
		);
	}
}
```

Have you ever wondered why we do that? To see why the `bind` is needed,
we imagine how we would write the `button` component.

```jsx
/* an imaginary button component */
class button extends React.Component {
	// imaginary function that gets executed when button is clicked
	whenClicked() {
		const { onClick } = this.props;
		onClick();
	}
	// ...
}
```

Without an object to call on, the `this` of `onClick` might get bound
to the global object or some value like `undefined` or even `this.props` of
the `button` component. We do not really know since it depends on the
internal implementation of `button`.

But in all cases, the `this` is not bound to an instance of `MyComponent`,
therefore our state is not mutated, since `this.state` does not point to
the state of `MyComponent` and `this.setState` does not point to the
`setState` of `MyComponent`.

To solve this problem, we use `bind` to make sure our `onClick` callback
executes with `this` pointing to `MyComponent`.

<hr>

Yeah, this is kinda complicated. Welcome to JavaScript.

## ES6 arrow function

If you haven't seen the syntax, here it is.

```js
const sayHi = name => {
	console.log('Hi, ' + name + '.');
};

// shorthand
const add = (a, b) => a + b;
```

Let's repeat the same exercise above, just to reinforce your understanding.
But instead of the function keyword, we use the arrow function syntax.

```js
const a = {
	username: 'Galen',
	getNameInsideA: () => {
		console.log(this.username);
	},
	getAgeInsideA: () => {
		console.log(this.age);
	},
};

const getNameOutsideA = a.getNameInsideA;
const getAgeOutsideA = a.getAgeInsideA;

// what is the output?
a.getNameInsideA();
getNameOutsideA();
var age = 19;
a.getAgeInsideA();
getAgeOutsideA();
```

<details>
<summary>Click to see output</summary>

```
undefined
undefined
19
19
```

</details>

Weird, huh?

<span style="font-size: 48px"><i>wElcOmE tO jAvAsCriPt</i></span>

### `this` binding in arrow function

A crucial difference between the `function` keyword and
the arrow function is the `this` binding. In an arrow function,
the `this` value is identical inside the arrow function
is identical to the `this` value outside it.
In other words, the `this` is determined at declaration time
rather than call time in an arrow function.

Let's look at the exercise example.

```js
const a = {
	username: 'Galen',
	getNameInsideA: () => {
		console.log(this.username);
	},
	getAgeInsideA: () => {
		console.log(this.age);
	},
};
```

When `getNameInsideA` and `getAgeInsideA` is defined, the
`this` is referring to the global object (not to `a`).
Therefore, `getNameInsideA` gives `undefined` no matter
how you call it.
And yes, `bind`, `call`, `apply` do not work on arrow functions.
In fact, the arrow function can be equivalently written as

```js
const a = () => {};
// is equivalent to
const a = function () {}.bind(this);
```

However, the `this` binding in arrow functions can still
be subjected to implicit/explicit runtime `this` binding.
This will be the case when the scope also has a runtime
bound `this`. A concrete example will be an arrow function
defined in a function with the `function` keyword.

### No `arguments` in arrow function

The `arguments` object does not work in arrow function.

```js
const a = () => {
	console.log(arguments);
};
a();
// ReferenceError: arguments is not defined
```

Remember I asked why JavaScript decided to have the rest
syntax and the `arguments` features at the same time when
they do the same thing?
The JavaScript language committee decided that `arguments`
is such a bad idea that it would do the world a great good
to disable that syntax in newer language features. As a result,
you are forced to use the better rest parameters syntax to use
arrow functions at all.

### 🍏Application: React callback revisited

Now we know that the `this` binds statically with arrow function.
We can replace `bind` with arrow function in `MyComponent`:

```js
class MyComponent extends React.Component {
	constructor() {
		this.state = { count: 0 };
		// we removed the bind
	}

	incrementCounter() {
		const currentCount = this.state.count;
		this.setState({ count: currentCount + 1 });
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>count: {count}</h1>
				{/* We instead use an arrow function here */}
				<button
					onClick={() => {
						this.incrementCounter();
					}}
				>
					{' '}
					plus 1{' '}
				</button>
			</div>
		);
	}
}
```

Our `onClick` callback is now an arrow function, which means that `this` is
bound to the current scope. Within the `render` function, `this` always
binds to the instance of the object. Therefore, this callback works
as well.

### Syntactic Pitfall

Syntactic shorthand is nice, but...

```js
const fn1 = a => a;
const fn2 = a => {
	a;
};
const fn3 = a => ({ a });

console.log(fn1(1));
console.log(fn2(1));
console.log(fn3(1));
```

<details>
<summary>Click to see output</summary>

```
1
undefined
{ a: 1 }
```

</details>

Why does `fn2` return `undefined`?
It might be easier to see if we rewrite it with some newlines and semicolons.

```js
const fn2 = a => {
	a;
};
```

The difference between the `function` keyword and the arrow function
can be summarized in a table.

|                | `function() {}` | `() => {}`       |
| -------------- | --------------- | ---------------- |
| `this` binding | call time       | declaration time |
| `arguments`    | ✅              | ❌               |

## Functional Programming in JavaScript

The most frequently used example of functional programming
in JavaScript is the `map`, `filter`, `reduce` functions on
arrays.

```js
const arr = [1, 2, 3];
const squared = arr.map(x => x * x);
const even = arr.filter(x => x % 2 == 0);
const sum = arr.reduce((runningSum, curr) => runningSum + curr, 0);
```

### Functions as first-class citizens

With arrow functions, you can see that function are just like
other values: they can be sotred in and passed around as variables.
We oftentimes pass functions to other functions.
For example, to get an array whose values are those of an
existing array, squared, we pass `x => x * x` to `array.map`.

This means that we can also return functions from functions.
Let's say we want to create some an increment function that increments
a number by a certain value.
We can hand-write such increment functions for all numbers, or we can write
a function to return different incrementers instead.

```js
function getIncrementer(incrementBy) {
	const incrementer = x => x + incrementBy;
	return incrementer;
}

// usage
const plus5 = getIncrementer(5);
console.log(plus5(5)); // 10
const plus42 = getIncrementer(42);
console.log(plus42(0)); // 42
```

Functional programming is a fascinating and well-developed
programming paradigm. We are only scratching the surface
here by introducing some pervasive patterns. To become more
proficient in functional programming, you will have to get used to
thinking about program "functionally". Consider taking CS 131
which covers OCaml and Scheme, both languages designed with
functional programming in mind.

## Final Challenge

To apply functional programming and some syntax we learned
today, let's do a challenge.

We want a function called `add3`. It can be invoked like the following.

```js
add3(1, 2, 3) === 6;
add3(1)(2)(3) === 6;
add3(1, 0)(5) === 6;
add3(2)(2, 2) === 6;
```

You can decide its behavior for `add3(1, 2, 3, 4)`.
Try it out, apply some of the features we learned today,
and good luck with JavaScript.

<details>
<summary>Click to see solution (plz try before you click)</summary>

```js
function add3(...args) => {
    if (args.length >= 3) return args.reduce((accu, curr) => accu + curr, 0);
    return (...newargs) => add3(...args, ...newargs);
}
```

</details>
