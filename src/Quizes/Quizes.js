import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import Quiz from "../Quiz/Quiz";
import './Quizes.css';

const Quizes = () => {
  const quizData = useLoaderData();
  // console.log("one", quizData)
  const quizes = quizData.data;
  const { name, questions} = quizes;

  return (
    <div>
      <Quiz name={name} />
      <div className="quizes">
        {questions.map((quiz) => (
          <Questions key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quizes;
