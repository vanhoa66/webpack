const redux = require("redux"),
    reducer = require("./reducer/reducer");

const store = redux.createStore(reducer);

module.exports = store;