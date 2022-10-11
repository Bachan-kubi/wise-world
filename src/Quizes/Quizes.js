import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    console.log(quizes.data);
    return (
        <div>
            <h3>quisex</h3>
            <div>
                {
                    quizes.map(quiz=><Quiz />)
                }
            </div>
        </div>
    );
};

export default Quizes;