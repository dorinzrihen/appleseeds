import React from 'react';
import './App.css';
import MyInput from './MyInput';


function App() {
  return (
    <form>
      <MyInput alreadySelected = {false} text = "I read the term of the app" />
      <MyInput alreadySelected = {false} text = "I accept the term of the app" />
      <MyInput alreadySelected = {true} text = "I want to get weekly news letter"/>
      <MyInput alreadySelected = {true} text = "I want to get sales and offers"/>
    </form>
  );
}

export default App;