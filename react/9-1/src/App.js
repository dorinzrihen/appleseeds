import React from 'react';
import './App.css';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        isLoading: true,
        time: Math.floor(Math.random()*10000),
      };
    
      componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading:false});
          }, this.state.time);
      }

     
      render() {
          return(<>
            {this.state.isLoading && <Spinner/>}
            </>
          );
     }
}

export default App;



