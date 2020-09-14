import React from 'react';
import MyButton from './MyButton';
import './App.css';

function App() {
  return (
    <div>
      <MyButton>
        <p className="pImportant">important</p>
      </MyButton>
      <MyButton>
        <p>Not important</p>
      </MyButton>
    </div>
  );
}

export default App;
