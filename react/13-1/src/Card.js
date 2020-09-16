
import React from 'react';
import './Card.css';

class Card extends React.Component{

    
    render(){
        return (
            <div className="card">
                <p>{this.props.avatarInfo}</p>
                <img src={this.props.avatarSrc}></img>
            </div>
        );
    }
}


export default Card;
