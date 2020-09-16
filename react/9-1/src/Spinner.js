import React from 'react';
import './App.css';
import SpinnerOption1 from './SpinnerOption1';
import SpinnerOption2 from './SpinnerOption2';
import SpinnerOption3 from './SpinnerOption3';



  class Spinner extends React.Component {
  randomize(myArray) {
      return myArray[Math.floor(Math.random() * myArray.length)];
  }
    render() {
      let arr = [<SpinnerOption1 />, <SpinnerOption2 />,<SpinnerOption3 />]
      return <> <div className="spinner-conatiner">{this.randomize(arr)}</div>
      <p>spinner credit https://github.com/tobiasahlin/SpinKit</p>
      </>
    }
  }
export default Spinner;
