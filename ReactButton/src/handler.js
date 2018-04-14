import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

module.exports = props => {
  const { className, onClick, label } = props;
  if (className && onClick && label) {
    return reactElementToJSXString(
      <div className={className} onClick={onClick}>
        {label}
      </div>
    );
  }
  return 'no JSON-object with keys label, onClick and className provided';
};
