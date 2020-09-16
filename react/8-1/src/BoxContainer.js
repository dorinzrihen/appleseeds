import React from 'react';


class  BoxContainer extends React.Component {
  state= {
    showLoader: false
 }
 
 componentDidMount() {
     setTimeout(() => {
       if(this.loading){
           this.setState({ showLoader: true })
       }
     }, 1000);
 }
 render() {
    if(this.state.showLoader) {
         return <div>WORK!</div>;
    }
 }
}

export default BoxContainer;