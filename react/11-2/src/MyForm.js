import React from 'react';
import './App.css';
import FormInput from './FormInput';
import SelectOption from './SelectOption';
import FormTextArea from './FormTextArea';


class MyForm extends React.Component {
  state = {firstName: '',lastName:'',age:'',freeTxt:''};

  onFormSubmit = event =>{
    event.preventDefault();
    console.log(this.state.firstName);
  }

  render(){
    return (
      <div>
          <form onSubmit={this.onFormSubmit}>
              <FormInput text="First Name:" inputType="text" value={this.state.firstName}/>
              <FormInput text="Last Name:" inputType="text" value={this.state.lastName}/>
              <SelectOption text="Age:" value={this.state.age}/>
              <FormTextArea text="Free Text:" inputType="text" value={this.state.freeTxt}/>
              <input type="submit"></input>
          </form>
      </div>
    );
  }

}

export default MyForm;
