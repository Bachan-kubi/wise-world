import React from "react";
import Options from "../Options/Options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./Questions.css";

const Questions = ({ quiz }) => {
  const { question, options, correctAnswer} = quiz;
//   console.log(question);

  return (
    <div className="q">
      <div>
        <h4>Quizes: {question.slice(3, -4)}</h4>
      </div>
      <div>
        {
            options.map(option=><Options key={option.id} option={option} correctAnswer={correctAnswer}/>)
        }
      </div>
    </div>
  );
};

export default Questions;
