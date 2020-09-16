import React from 'react';
import './App.css';
import axios from 'axios';
import MyBtn from './MyBtn';
import DisplayJoke from './DisplayJoke'
import CategoryBtn from './CategoryBtn'

class ChuckNorrisJokes extends React.Component{
    state = {
        randomJoke: "",
        randomJokeCategory:null
    }
    randomJoke = async (api) =>{
        const response = await axios.get(api);
          this.setState({ randomJoke: response.data.value });  
        };

    randomJokeCategory = async (api) =>{
        const response = await axios.get(api);
            this.setState({ randomJokeCategory: response.data.value });  
        };
        
    
    
    render(){
        return (
            <div>
                <MyBtn onClick ={this.randomJoke}/>
                <DisplayJoke value={this.state.randomJoke} />
                <CategoryBtn onClick ={this.randomJokeCategory}/>
                <DisplayJoke value={this.state.randomJokeCategory} />
            </div>
        );
    }
}


export default ChuckNorrisJokes;
