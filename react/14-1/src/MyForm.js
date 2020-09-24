import React, { Component } from 'react';
import Filed from './Filed';

class MyForm extends Component {
    render() {
        return (
            <form>
                <Filed value="name"/>
                <Filed value="last name"/>
            </form>
        );
    }
}

export default MyForm;