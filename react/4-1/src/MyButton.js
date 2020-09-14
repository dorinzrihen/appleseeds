import React from 'react';
import './App.css';

function MyButton(props) {
  return (
      <button>{props.children}</button>
  );
}

export default MyButton;

