import React from 'react';
import './Card.css';

function Card(promp) {
  return (
    <div className="card-container">
        <div>
            <img src={promp.cardImg} alt=""/>
        </div>
        <div className="card-info">
            <h1>{promp.cardTitle}</h1>
            <p>{promp.cardDescription}</p>
            <div>
                <a href="">SHARE</a>
                <a href="">EXPLORE</a>
            </div>
        </div>
    </div>
  );
}

export default Card;
