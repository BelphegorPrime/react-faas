import React from 'react';
import ReactDomServer from 'react-dom/server';

const elemToString = elem => ReactDomServer.renderToString(elem);

module.exports = props => {
  if (props.name) {
    return elemToString(<div>{props.name}</div>);
  }
  return 'no JSON-object with key name provided';
};
