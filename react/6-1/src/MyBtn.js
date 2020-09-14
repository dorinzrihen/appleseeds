import React from 'react';
import './App.css';

class MyBtn extends React.Component {
    render(){
        return (
            <button style={this.props.btnStyle}>{this.props.btnText}</button>
        );
    }
}

export default MyBtn;

