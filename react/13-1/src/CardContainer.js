import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card'
import SearchAvatar from './SearchAvatar'

class CardContainer extends React.Component{
    state = {
        randomAvatar: [],
        searchInput:'',
        fullAvatarArr:[],
    }

    filterCards = (input) => {
        this.setState({searchInput:input},() => this.renderCards());
    }

    renderCards = () => {
        let  avatarInfoContainer= this.state.fullAvatarArr.map((avatar) => {
            let fullName = `${avatar.first_name} ${avatar.last_name}`
            return (this.state.searchInput ==='' || fullName.includes(this.state.searchInput)) &&<Card  avatarSrc={avatar.avatars[0].url}avatarInfo={fullName}/>
        })
        this.setState({randomAvatar:avatarInfoContainer})
    }
    

    async componentDidMount(){
        const response = await axios.get('https://tinyfac.es/api/users');
        this.setState({fullAvatarArr:response.data}, () => this.renderCards())
    }
    
    render(){
        return (
            <>
                <SearchAvatar onChange={this.filterCards}/>
                <div className="cards-container">
                    {this.state.randomAvatar}
                </div>
            </>

        );
    }
}


export default CardContainer;
