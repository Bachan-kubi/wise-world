import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizData = useLoaderData();
    // console.log("one", quizData)
    const quizes = quizData.data;
    const {name} = quizes;
    const {questions} = quizes;
    // console.log("o", quizes)
    
    return (
        <div>
            <h3>quisex</h3>
            <Quiz name={name} />
            
            {/* <Questions questions={questions} /> */}
            <div>
                {
                    questions.map(quiz=><Questions key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    );
};

export default Quizes;