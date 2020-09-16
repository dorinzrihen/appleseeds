import React from 'react';
import './App.css';

class DisplayJoke extends React.Component{
    render(){
        return <p>{this.props.value}</p>
    }
}

export default DisplayJoke;
