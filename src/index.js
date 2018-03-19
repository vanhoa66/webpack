const React = require("react"),
    ReactDOM = require("react-dom"),
    Main = require("./components/main"),
    { Provider } = require("react-redux"),
    store = require("./store.js");



ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);
