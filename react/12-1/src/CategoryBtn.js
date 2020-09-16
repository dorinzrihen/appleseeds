import React from 'react';
import axios from 'axios';
import BtnForCategory from './BtnForCategory'



class CategoryBtn extends React.Component{
    state = {
        categoryName: []
    }

    handleClick = (myApi) => {
        this.props.onClick(myApi);
      }

    async componentDidMount(){
        const response = await axios.get(`https://api.chucknorris.io/jokes/categories`);
        const categoryApp = await response.data.map((cat) => {
            return <BtnForCategory onClick={this.handleClick} category={cat}/>
        })

        this.setState({categoryName:categoryApp})
    }
    
    render(){
        return (
            <div>{this.state.categoryName}</div>
        );
    }
}


export default CategoryBtn;
