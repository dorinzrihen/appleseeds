import React from 'react';
import './App.css';


class FormTextArea extends React.Component {

    render(){
        return (
            <div>
                <label>{this.props.text}</label>
                <textarea rows="4" cols="50"></textarea>
            </div>
          );
    }

}

export default FormTextArea;
