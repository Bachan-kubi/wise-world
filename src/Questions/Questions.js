import React from 'react';

const Questions = ({quiz}) => {
    console.log(quiz);
    const {question}=quiz;

    return (
        <div>
            {question}
        </div>
    );
};

export default Questions;