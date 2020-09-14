import React from 'react';
import './Card.css';

class Card extends React.Component {
    render(){
        return (
            <div className="card-container">
                <div>
                    <img src={this.props.cardImg} alt=""/>
                </div>
                <div className="card-info">
                    <h1>{this.props.cardTitle}</h1>
                    <p>{this.props.cardDescription}</p>
                    <div>
                        <a href="">SHARE</a>
                        <a href="">EXPLORE</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
