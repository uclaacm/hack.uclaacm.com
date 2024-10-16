---
date: 2019-11-20
title: 'Introduction to Testing with JavaScript'
subtitle: 'JavaScript Chats with ACM Hack Session 6'
---

In this session of JavaScript Chats, we will introduce
the concepts used in testing through JavaScript.
The example that we used is not complex or fancy, but 
the point is to introduce the concept. 

- [Test Driven Development](#test-driven-development)
- [Jest: a JavaScript Testing Framework](#jest-a-javascript-testing-framework)
  - [Code Coverage: Don't Even Try to Get to 100%](#code-coverage-dont-even-try-to-get-to-100)
- [Types of Tests](#types-of-tests)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
- [Mocking](#mocking)
  - [Why mock?](#why-mock)


## Test Driven Development

> Chicken or egg first?

When you are writing a program, how do you know that 
your program works?
When I was doing my CS31 C++ homework, I try to layout
the logic of my program and then code it out. 
After the code is finished, I give it some test case 
and see if my program handles the test cases correctly. 

To test a function, you just add some code in the `main`
function that calls the function with the test case inputs,
and seeing if the output is correct. You either do it
by printing it out and manually checking the output value,
or by an assertion (with an if statement). 

The process I just described have the following 
(subjective) characteristics:

- You understand fully the code that you wrote (hopefully)
- There is quite a bit of labour on writing code to check 
  your answer (if statements, print statements)
- You are testing your own code that is not used by anyone 
  else 
- Code comes before test

There is an extremely opinionated 
[Wikipedia page](https://en.wikipedia.org/wiki/Cowboy_coding) 
that criticizes this approach called cowboy coding.
You can see how opinionated it is based on the warning
on the wiki page:

<figure align=center>

![Warning messages on the cowboy coding article 
on Wikipedia](images/cowboy-warning.png)

_The neutrality of this article is disputed._
</figure>


The popular kid that is compliant and is everybody's 
favorite is called __Test Driven Development__ (TDD).
If I were to name the one biggest difference between 
test driven development and cowboy coding, it would be
that test comes first before the code. 

Before writing a single line of code, a test driven
developer will write the test cases first. But the 
function/module that we are testing contains no code
and therefore does nothing. What is the point of 
writing test cases that is going to fail? 

That is the central idea of test driven development.
You "break" your program with a failing test case,
then you go "fix" your program such that your program
passes the test case. People often describes TDD in 
3 basic steps:

1. Red: Write a test and make sure it fails.
2. Green: Write the simplest, easiest possible code to 
   make the test pass.
3. Refactor: Optimise and/or simplify the application 
   code, making sure that all the tests still pass.

(Taken from James Sinclair, [A Gentle Introduction to 
JavaScript Test Driven Development Part 
1](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/))

> Can you forsee any problem with this approach?

## Jest: a JavaScript Testing Framework

Let's experience test driven development with a testing
framework called Jest. Assume that we are writing a 
Node.js server application. The first thing we need is to 
set up our application using `npm`.

```
npm init -y
```

We want to install the `jest` framework. 
```
npm install --save-dev jest
```

> Note: The `--save-dev` options of the `npm` command saves the 
> installed package as a development dependencies, meaning this
> package is not needed for the application to work, but it is 
> only used during development. Can you see why there is a need
> to separate development and build dependencies?

We are going to write a function `fizzBuzz` in a file called 
`utils.js`. The function takes in a number `x` as the 
only argument, and returns the following strings:
- `'fizz'` if `x` is divisible by 3
- `'buzz'` if `x` is divisible by 5
- `'fizz buzz'` if `x` is divisible by both 3 and 5
- `x` as a string if `x` is divisible neither by 3 nor 5

However, before we even start writing a single line of code, 
remember that tests come first. We create a file containing
our test named `utils.test.js`. Then, we start writing our
first test case!

```js
const { fizzBuzz } = require('./utils');

test('fizz is returned on 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});
```

The `test`, `expect` functions are implicitly defined by
the testing framework. Each `test` function takes in a 
string as the name of the test and a function that executes
the test. Each `expect` function does an assertion on 
a value. 

The Jest framework is designed such that if you read out
the test code, you understand what it is trying to 
test for!

> Why does a good test has to be readable?

This is definitely going to break since we have not even
defined our function or even created our file yet!
But this is fine, since we want our test to fail.

Now, we add a script to our `package.json` to run the 
test.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Then, we can execute the test with `npm run test`.
You should see the following output.

```
FAIL  ./utils.test.js
● Test suite failed to run

  Cannot find module './utils' from 'utils.test.js'

  However, Jest was able to find:
  	'./utils.test.js'
```

This is our first failing test case! We can clearly
see the problem being the module `./utils` is 
not found since we have not defined it. Following
our Red, Green, Refactor process, we make our test 
pass by creating our `utils.js`.
After we create an empty file, we run our test
again. We should get failure again. Here is the error 
message.

```js
FAIL  ./utils.test.js
✕ fizz is returned on 3 (4ms)

● fizz is returned on 3

  TypeError: fizzBuzz is not a function

    2 |
    3 | test('fizz is returned on 3', () => {
  > 4 |   expect(fizzBuzz(3)).toBe('fizz');
      |          ^
    5 | });
    6 |
    7 |

    at Object.<anonymous> (utils.test.js:4:10)
```

We can see the beautifully formatted error message.
We know the problem is that we have not defined
the `fizzBuzz` function yet! With Jest, you do not
need to do much manual work to test your code! 
The testing experience is every developer friendly.

We had to executing the `npm run test` command 
after each update to our file. Can we make it easier?
Can Jest automatically run our test cases every time
we update our file? Yes! 
We change our test script in `package.json`.

```json
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
```

We execute `npm run test` again. You should see 
the same failing output. But our test program did
not quit but instead hangs on the terminal. 

Now we go defined our function.

```js
// in utils.js
const fizzBuzz = x => {};

module.exports = {
  fizzBuzz
};
```

Now, our test screen has updated, with a different
error message. 

```js
FAIL  ./utils.test.js
✕ fizz is returned on 3 (3ms)

● fizz is returned on 3

  expect(received).toBe(expected) // Object.is equality

  Expected: 3
  Received: undefined

    2 |
    3 | test('fizz is returned on 3', () => {
  > 4 |   expect(fizzBuzz(3)).toBe('fizz');
      |                       ^
    5 | });
    6 |
    7 |
```

We can clearly see the returned value does not match
the expected value. As a developer, we only had to write
a few lines of test code to get all these nice features. 
We don't need to care about what to print out if our test
fails. We don't need to handle any if statements and such.

Our test case still fails. Let's keep fixing it. Remember
in test driven development, you want to write the minimal
code to get the test case to pass. 

To pass the only test case that we have, we can simply
return `'fizz'` regardless of the function input.

```js
const fizzBuzz = x => {
  return 'fizz';
};
```

Now our test passes. We are now in the "green" stage.
```
PASS  ./utils.test.js
✓ fizz is returned on 3 (1ms)
```

Let's keep adding failing test case then. 

```js
test('fizz buzz is returned on 15', () => {
  expect(fizzBuzz(15)).toBe('fizz buzz');
});
```
Now our test is "red". We write code to make 
it pass.

```js
const fizzBuzz = x => {
  if (x % 5 === 0)
    return 'fizz buzz';
  return 'fizz';
};
```

Now, our test is green. We add more failing test cases.

```js
test('buzz is returned on 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});
```

We write more code to fix the failing test.

```js
const fizzBuzz = x => {
    if (x % 5 === 0) {
        if (x % 3 == 0)
            return 'fizz buzz';
        else 
            return 'buzz';
    }
    return 'fizz';
};
```
We are now "green".
We add another test case to become "red".

```js
test('a number string 17 is returned on 17', () => {
  expect(fizzBuzz(17)).toBe('17');
});
```

Now, we turn "green" by adding more code.

```js 
const fizzBuzz = x => {
    if (x % 5 === 0) {
        if (x % 3 == 0)
            return 'fizz buzz';
        else 
            return 'buzz';
    }
    if (x % 3 == 0)
        return 'fizz';
    return x.toString();
};
```

At this point, you might notice some problem. The code
that we wrote is not clean. Namely, there is unnecessarily
nested if statements.

That is why we have our "refactor" step in the 3. 
The code from a TDD process can be quite convoluted since
we never thought about the overall structure or logic of
our code in the process. After finishing the test, and 
we have a complete version of our code. We might want to 
refactor our code!.

```js
const fizzBuzz = x => {
    if (x % 15 === 0)
        return 'fizz buzz';
    if (x % 3 === 0)
        return 'fizz';
    if (x % 5 === 0)
        return 'buzz';
    return x.toString();
};
```

After refactoring, our code is cleaner, easy to read
but still have all the correct functionalities guaranteed
by the test that we wrote. For reference, here is all the
test code that we wrote.

```js
const { fizzBuzz } = require('./utils');

test('fizz is returned on 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('fizz buzz is returned on 15', () => {
  expect(fizzBuzz(15)).toBe('fizz buzz');
});

test('buzz is returned on 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test('a number string 17 is returned on 17', () => {
  expect(fizzBuzz(17)).toBe('17');
});
```

### Code Coverage: Don't Even Try to Get to 100%

How do we know that we have written a set of comprehensive
test cases? Having all of our test passes does not mean we
have caught all the edge cases. 
Ask yourself: when you are testing your code, how would you
come up with edge cases? 
Coming with edge cases is extremely hard. What if there is
a better way that use less of our brain power? 

In testing, code coverage is a measurement of how many
lines of code are executed/exercised by the test cases.
For instance, we use the `fizzBuzz` example above.
If we remove the last test case 
`'a number string 17 is returned on 17'`, we know that 
the code `js›return x.toString()` will not be ran by
any test cases. Therefore, our test cases cannot 
guarantee that the line `js›return x.toString()` will
be correct.

How can we see the code coverage then? There is an 
option in Jest for just that! We modify our test 
script in `package.json`.

```json
{
  "scripts": {
     "test": "jest --watchAll --coverage"
  }
}
```

We execute `npm run test`. You should see the following 
output. 

```
 PASS  ./utils.test.js
  ✓ fizz is returned on 3 (3ms)
  ✓ fizz buzz is returned on 15
  ✓ buzz is returned on 5 (7ms)
  ✓ a number string 17 is returned on 17 (1ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 utils.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
```

If you remove the last test case, you wil see the code
coverage drops.

```
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |    88.89 |    83.33 |      100 |    88.89 |                   |
 utils.js |    88.89 |    83.33 |      100 |    88.89 |                 8 |
----------|----------|----------|----------|----------|-------------------|
```

> Typically, a large code base will not have 100% coverage. 
> Can you think of why? 

## Types of Tests

Tests can be generally classified into several categories 
by the number of components in the application that it tests for. 
Is it testing just one function? Is it testing an API endpoint?
Is it testing the entire application from the UI (web/mobile app)
to the backend (server and database)?
The difficulty of writing tests increases with the number of
components that it tests for. 
It can summarized in the Test Pyramid.

![test pyramid showing cost and speed changes with 
different types of tests](images/test-pyramid.png)

(Image credit to Jess Champion,
[The Enduring Value of Unit Tests](https://www.silverstripe.org/blog/developers-the-enduring-value-of-unit-tests/))


### Unit Testing

Unit testing refers to testing a single unit of code. 
It can be a module, a function, or a component. 
The `fizzBuzz` example above is an example of a unit test.
We are conducting tests that only on a single function. 

### Integrated Testing

Integrated testing refers to testing an integration
between 2 or more modules. Usually, this means that
you are testing your API endpoints, since API
endpoints usually involve multiple modules, like
routing, actual endpoint logic, and database etc.

Let's put our `fizzBuzz` into an `express` server. 

> `express` is a popular routing library for Node.js.

Using the previous repository that we were working on,
we first install `express`.

```
npm install --save express 
```

We create a file named `server.js` to contain our 
server.

```js
// server.js
const express = require('express');
const { fizzBuzz } = require('./utils');
const app = express();

app.use('/fizzBuzz/:num', (req, res) => {
  const number = parseInt(req.params.num);
  const answer = fizzBuzz(number);
  res.json({ answer });
});

module.exports = {
  app
};
```

> Yes, I wrote the code before the test here. But
> this is for demonstration purpose. If you do 
> follow TDD practice, this is probably not the best
> idea.

Notice that we exported our `app`. This is because
that we need to use the `app` during testing.

> How would you go about testing this?

At this point, we can start our application server,
by calling `app.listen(3000)`.
Send some requests to `localhost:3000/fizzBuzz`, 
and thus writing test cases based on that. 
However, this requires us to go to the network level
for testing. Also, our test will be very verbal since
we need to make network request but those are not
as readable and the intention is not as clear.

For testing HTTP server, we will use a package called
SuperTest. 

```
npm install --save-dev supertest
```

This package allow us to test express application without
having to start a server and explicitly send network request.
Most importantly, it allows us to write tests in a very readable
manner. 

Time to write our test. Where should we put our test files?
We can put them in `server.test.js`. However, the `XXX.test.js`
is usually where we put all the unit tests. The convention for
integration tests is to put them under a directory called 
`__tests__`. We are going to put the tests under a file 
named `fizzBuzzEndpoint-test.js`.

For reference, this is what your file structure should look like.

```js
├── __tests__
│   └── fizzBuzzEndpoint-test.js
├── index.js
├── package-lock.json
├── package.json
├── server.js
├── utils.js
└── utils.test.js
```

```js
// __tests__/fizzBuzzEndpoint-test.js
const request = require('supertest');
const { app } = require('../server');

describe('/fizzBuzz endpoint', () => {
    it('should respond to request', done => {
        request(app)
            .get('/fizzBuzz/1')
            .expect(200)
            .end(done);
    });
});
```

The `describe` function is provided by Jest. It allows
you to group individual tests into one group. Here,
we are grouping all the tests we want to do on the 
`/fizzBuzz` endpoint in one `describe`. 

`it` is the same as the `test` function we used above. 
It takes in a string and a callback function containing
our code for one test. Note that requesting for an API
endpoint is an asynchronous action. Therefore, the 
test callback also takes in a `done` function, which is 
passed in by Jest. We call the `done` function when 
we are done with the test. We are using `it` here
since it is readable: the `/fizzBuzz` endpoint should or 
should not be doing something.

Since the test is async, we can also use an alternative
`async/await` syntax. 

```js
it('should not respond to request without number', async () => {
    await request(app)
        .get('/fizzBuzz/')
        .expect(404);
});
```

> Exercise: Can you translate the unit test that we wrote
> into integration tests using `supertest`?

## Mocking

Imagine that you are testing a backend system with database.
There is a function that interacts with some other server API.
For instance, it retrieves a user from another database APi. 
Then, it returns the full name of the user as string. 
Here is the code for it.

```js
// utils.js
const axios = require('axios');

const getUserFullName = async userId => {
    const user = await axios.get('http://my.api.com/user/' + userId);
    return user.data.firstName + ' ' + user.data.lastName;
};
```

> Before we move on, how would you test it?

If you write test for this function, you are not doing
a unit test. Instead, you are actually doing an 
integration testing, since the function depends on 
the correctness of the `axios` module. How do we 
actually test the logic within the function without
having to depend on other modules/systems?

We use a common testing technique called __mocking__.
We mock a fake but simplistic version of an external
dependencies. I emphasize simplicity since simple code 
means less mistakes.

Let's see how we can mock a database within Jest.

```js
// utils.test.js
const axios = require('axios');
const { getUserFullName } = require('./utils');

jest.mock('axios');

test('should return full name', async () => {
    const user = {
        firstName: 'Galen',
        lastName: 'Wong'
    };
    axios.get.mockResolvedValue({ data: user });

    const fullName = await getUserFullName(1);
    expect(fullName).toBe('Galen Wong');
});
```

With `js›jest.mock('axios')`, we tell Jest that we want
to mock a module called `axios`. Within the test code body,
we overwrite the `axios.get` function, such that it returned
a promise with resolved value equal to `js›{ data: user }`.
When our `getUserFullName` is executed, the object that we mocked
will be used as the return value of `axios.get`.

### Why mock?

Apart from simply adhering to the definition of a unit test, 
what are the other benefits of mocking in test?
There are 2 important motivations to use mocking:
- reduce set up complexity of running tests
- reduce time taken to run tests

If we were to test without mock, we would have to make 
sure that we have a server set up to receive calls from our 
tested function during test time. We have to know what data
exists on the server. For instance, what is the name of the
user with id 1. With all these things to worry about, we 
cannot focus on our testing. Writing the infrastructure needed
to support the testing is going to take way longer than actually
implementing your desired functionality.
With mocking, we reduce the set up complexity of testing.

If we were to test by calling to a server, our test will
run for longer, since network call is time consuming operation.
As developer, we would like our test to run fast such that 
we can know what is wrong quickly.


