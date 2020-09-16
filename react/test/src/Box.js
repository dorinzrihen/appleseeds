import React from 'react';
import './App.css';

function Box(props) {
  return (
    <div className="box" style={{width: props.size, height: props.size}}>
      
    </div>
  );
}

export default Box;
