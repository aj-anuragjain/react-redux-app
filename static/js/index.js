/**
 * Created by jainhub on 14/03/2017 AD.
 */


import "babel-polyfill"
import React, {Component} from "react"
import {render} from "react-dom"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux";
import {Router, Route, broswerHistory} from "react-router"
import reducer from "./reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise"
import App from "./components/app"


const middleware = applyMiddleware(logger(), thunk, promise);


let store = createStore(reducer, middleware);


store.subscribe(() => {
    console.log("State changed: ", store.getState());
});


render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById("root"));