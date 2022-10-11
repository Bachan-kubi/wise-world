import React from 'react';
import './Questions.css'

const Questions = ({quiz}) => {
        const {question}=quiz;
        console.log(question);
    return (
        <div className='q'>
            <h4>Quizes: {question}</h4>
        </div>
    );
};

export default Questions;