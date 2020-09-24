import React, { Component } from 'react';

class Filed extends Component {
    inputRef = React.createRef();


    componentDidMount(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <label >{this.props.value}</label>
                <input ref={this.inputRef} type='text'/>
            </div>
        );
    }
}

export default Filed;