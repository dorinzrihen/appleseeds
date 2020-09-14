import React from 'react';
import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';
import Q2Title from './Q2Title';
import Q2Input from './Q2Input';


const Quiz = () => {
    return (
        <div className="quiz">
            <QuizTitle/>
            <Q1/>
            <Q2/>
        </div>
    );  
}

export default Quiz;