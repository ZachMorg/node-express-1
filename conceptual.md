### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  //Using async/await controls when the code must wait for a response

- What is a Promise?
  //It is a way to get a placeholder for a value in asynchronus code

- What are the differences between an async function and a regular function?
  //An async function returns a promise while a regular function just returns a value

- What is the difference between Node.js and Express.js?
  //Node is a base environment for making backend JS while Express is built on Node for more specific tasks like middleware and routing

- What is the error-first callback pattern?
  //It returns either an error or the data depending if there is an error or not

- What is middleware?
  //It is functions that run between data being requested from the server and the response data being sent

- What does the `next` function do?
  //The next function is used in middleware to determine when/where the code should run next

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  //Since each user has the await keyword, they'll run only when the one before them is finished. Using Promise.all() will allow
    all the calls to run while still only moving on when all calls are finished. Also, the function is only for these three users.
    It would be better to have a 'users' parameter to pass on an array of users.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
