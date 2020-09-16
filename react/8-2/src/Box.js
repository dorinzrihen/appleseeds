import React from 'react';
import './App.css';

function Box(props) {
  return (
    <div className="box" style={{borderRadius: props.round}}></div>
  );
}

export default Box;
