import React from 'react';
import './App.css';


class SelectOption extends React.Component {

    render(){
        return (
            <div>
                <label for="age">{this.props.text}</label>
                <select name="age">
                    <option value="0-15">0-15</option>
                    <option value="16-25">16-25</option>
                    <option value="26-40">26-40</option>
                    <option value="over 40">over 40</option>
                </select>
            </div>
          );
    }

}

export default SelectOption;
