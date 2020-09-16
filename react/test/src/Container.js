import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class Container extends React.Component {
    state = {
        isAnimeted: false,
        count:1
      };
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ isAnimeted: true });
        }, 1000);

        setTimeout(() => {
            this.setState({ isAnimeted: false });
          }, 5000);
      }

     
      render() {
          return(<div>
            {this.state.isAnimeted && <Box size="150px"/>}
            {this.state.isAnimeted && <Box size="100px"/>}
            {this.state.isAnimeted && <Box size="50px"/>}
            </div>
          );
     }
}

export default Container;



