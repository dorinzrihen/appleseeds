import React from 'react';
import PinkBox from './PinkBox';

const RedBox = () => {
    return (
        <div className = "red-box">
            <PinkBox></PinkBox>
            <PinkBox></PinkBox>
        </div>
    );  
}

export default RedBox;