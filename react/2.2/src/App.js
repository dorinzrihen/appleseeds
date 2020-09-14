import React from 'react';
import logo from './logo.svg';


function App() {
  const data = ["hello", "world"];

  const number1 = 5;
  const number2 =6;

  const string = "I love React!";

  return (
    <div className="App">
      <header className="App-header">
          <p>{data[0]} {data[1]}</p>
          <p>{number1} + {number2} = {number1+number2}</p>
          <p> The string’s length is {string.length}</p>
      </header>
    </div>
  );
}

export default App;
