# react-js-apis

This repo has a few branches on it. `without-redux`, `with-redux`, and `custom-middleware` will show you a few different ways to handle getting data. I'm making use of the fantastic [JSONPlaceHolder Website](https://jsonplaceholder.typicode.com/) to get a list of users back.

Just clone down, run `npm start` and visit [localhost:8080](http://localhost:8080/) to get up and running.

### without-redux
The simplest way to handle an API/Db call is on the component itself, but it's not the safest way and should only be done if your component or page doesn't have a large state object. When you let the component change it's own state, you risk more bugs and less control over your application.

### with-redux
Another way, which requires more code but leverages the powerful middleware of Redux, is highly preferred to just throwing your API/Db calls in the component. Here we leverage the Redux store and let it take care of the rest.

### custom-middleware
A third way, which doesn't always need to be the case, is to write your own middleware to handle *async* API/Db calls.
