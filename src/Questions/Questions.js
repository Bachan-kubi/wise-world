import React from "react";
import Options from "../Options/Options";
import "./Questions.css";

const Questions = ({ quiz }) => {
  const { question, options} = quiz;
//   console.log(question);
  return (
    <div className="q">
      <h4>Quizes: {question}</h4>
      <div>
        {
            options.map(option=><Options key={option.id} option={option} />)
        }
      </div>
    </div>
  );
};

export default Questions;
