import React from 'react';
import './App.css';

class BtnForCategory extends React.Component{
  state = {
    apiOption:this.props.category
  }
  handleClick = (e) => {
    this.props.onClick(`https://api.chucknorris.io/jokes/random?category=${this.state.apiOption}`);
    }

    render(){
      return <button  onClick={this.handleClick}>{this.props.category}</button>
    }

}


export default BtnForCategory;
