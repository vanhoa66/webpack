const redux = require("redux"),
    arrWord = require("./wordReducer"),
    filter = require("./filterReducer"),
    isAdding = require("./isAddingReducer");

const reducer = redux.combineReducers({ arrWord, filter, isAdding });

module.exports = reducer;