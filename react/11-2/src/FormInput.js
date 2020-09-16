import React from 'react';
import './App.css';


class FormInput extends React.Component {

    render(){
        return (
            <div>
                <label>{this.props.text}</label>
                 <input type="text" name="name" value={this.state.text} onChange={e => this.setState({firstName: e.target.value})} />
            </div>
          );
    }

}

export default FormInput;
