import React from 'react';
import './App.css';


class YellowBox extends React.Component {
    state = {
        myBox: 'box'
        };

    handleClick = () => {
        // Use updater function when new state is derived from old
        if(this.state.myBox){
            this.setState({myBox:null});
        }
        else{
            this.setState({myBox:'box'});
        }
    }

    render() {
        return (<div>
                <button onClick={this.handleClick}>Click me</button>
                <div className={this.state.myBox}></div>
            </div>
        );
    }
}

export default YellowBox;
