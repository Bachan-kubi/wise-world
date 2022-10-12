import React from "react";
import "./Options.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ option, correctAnswer }) => {
  // const ansHandler = ()=>{
  //     if(option===correctAnswer){
  //         alert("your answer is correct!")
  //     }else{
  //         alert('wrong!')
  //     }
  // }
  const ansHandler = () => {
    if (option === correctAnswer) {
      toast("Weldone! Answer is correct!");
    } else {
      toast("Sorry! Wrong Answer!");
    }
  };
  return (
    <div onClick={ansHandler} className="option">
      <input type="radio" value="option" />
      <p>{option}</p>
      <ToastContainer 
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      />
    </div>
  );
};

export default Options;
