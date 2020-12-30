# Async / Await

- See: https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await
- There are no new ideas in this file. Just standard Node concepts from article above.

> TL;DR: The `async` keyword means you're writing a function that returns a Promise.

## History Lesson

> ES2015 / ES6 / Harmony : "Promises will fix callback hell!"

- *...reality:* Promises are weird, nested, kinda confusing, and you "can't break the chain."

> ES2017 / ES8 : Async/await is easier because it _looks_ like synchronous code.

## The `async` keyword means _you are writing a function which returns a Promise._

- This is why this code is valid:

 ```javascript
const aFunction = async () => {
  return 'test'
}

aFunction().then(alert) // This will alert 'test'
 ```

- and it's the same as:

```javascript
const aFunction = () => {
  return Promise.resolve('test')
}

aFunction().then(alert) // This will alert 'test'
```

## It's just easier to read!

> For example here's how you would get a JSON resource, and parse it, using promises:

```javascript
const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`/users/${user.name}`)) // get user data
    .then(userResponse => userResponse.json()) // parse JSON
}

getFirstUserData()
```


> And here is the same functionality provided using await/async:

```javascript
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}

getFirstUserData()
```

## Easier debugging

Debugging promises is hard because the _debugger will not step over asynchronous code._

> Async/await makes this very easy because _to the compiler it's just like synchronous code._

## Error Handling: try, catch, finally

```javascript

const aFunction = async() => {
    try {
        await fetch('/thing')
    }
    catch (e) {
        console.error(e)
    }
    finally {
        console.log('cleanup')
    }
}
```