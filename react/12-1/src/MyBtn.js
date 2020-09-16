import React from 'react';
import './App.css';

class MyBtn extends React.Component{
  state = {
    apiOption:this.props.value
  }
  handleClick = (e) => {
      this.props.onClick('https://api.chucknorris.io/jokes/random');
    }

    render(){
      return <button  onClick={this.handleClick}>Click me</button>
    }
  

}


export default MyBtn;
