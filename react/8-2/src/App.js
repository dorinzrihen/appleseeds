import React from 'react';
import './App.css';
import Box from './Box';

class App extends React.Component {
    state = {
        isAnimeted: false,
        round:0,
        color:0
      };
    
      componentDidMount() {
        const timeout = setInterval(() => {
          this.setState({ isAnimeted: true, round:this.state.round+1,color:Math.floor(Math.random()*359)});
        }, 500);


        setTimeout(() => {
          clearInterval(timeout);
            this.setState({ isAnimeted: false });
          }, 5500);
      }

     
      render() {
          return(<div>
            {this.state.isAnimeted && <Box round={this.state.round>5 && '50%'} color= {this.state.color}/>}
            </div>
          );
     }
}

export default App;



