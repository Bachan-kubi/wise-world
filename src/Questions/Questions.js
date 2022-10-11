import React from 'react';
import './Questions.css'

const Questions = ({quiz}) => {
        const {question}=quiz;
        console.log(question);
    return (
        <div className='q'>
            <h3>Quizes: {question}</h3>
        </div>
    );
};

export default Questions;