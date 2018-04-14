"use strict";

const getStdin = require('get-stdin');
const React = require('react');
const ReactDomServer = require('react-dom/server');

const elemToString = (elem) => ReactDomServer.renderToString(elem);

let handle = (val) => {
    return elemToString(<div>{"Hello " + val}</div>)
};

getStdin().then(val => {
    console.log(handle(val));
}).catch(e => {
    console.error(e.stack);
});
