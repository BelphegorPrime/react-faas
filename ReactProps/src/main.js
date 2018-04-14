"use strict";

const getStdin = require('get-stdin');
const handle = require('./handler');

const isJsonString = (str) => {
    const replacedString = str.replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return /^[\],:{}\s]*$/.test(replacedString);
};

getStdin().then(propsString => {
    let props = propsString;
    if(props !== '' && isJsonString(props)){
        props = JSON.parse(propsString);
    }
    console.log(handle(props));
}).catch(e => {
    console.error(e.stack);
});
