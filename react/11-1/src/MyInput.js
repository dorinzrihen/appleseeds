import React from 'react';
import './App.css';

class MyInput extends React.Component{
  state = {
    autoSelect:this.props.alreadySelected
  }

  changeValue = (event) =>{
    this.setState({autoSelect: !this.state.autoSelect});
  }

  render(){
    return (
        <div>
          <input type="checkbox" checked={this.state.autoSelect} onChange={this.changeValue}/>
          <label>{this.props.text}</label>
        </div>
    );
  }
}

export default MyInput;
