import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz);
    const {questions}= quiz;
    return (
        <div>
            <p>{questions}</p>
        </div>
    );
};

export default Quiz;