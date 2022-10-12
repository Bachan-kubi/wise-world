import React, { useState } from "react";
import Options from "../Options/Options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./Questions.css";
import { Alert} from 'flowbite-react';
// import { ToastContainer } from "react-toastify";

const Questions = ({ quiz }) => {
  const { question, options, correctAnswer} = quiz;
//   console.log(question);
const [isActive, setIsActive] = useState(true);
  const handleAnsView = event => {
    setIsActive(current => !current);
  };

  return (
    <div className="q">
      {/* <ToastContainer /> */}
      <div className="qa">
        <h3>Quizes: {question.slice(3, -4)}</h3>
        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? '' : 'hidden'} icon={faEye} />
        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? 'hidden' : ''} icon={faEyeSlash} />
      </div>
      <div>
        {
            options.map(option=><Options key={option.id} option={option} correctAnswer={correctAnswer}/>)
        }
      </div>
        <div className={isActive ? 'hidden' : ''}>
        
                <Alert
                    color="success"
                    onDismiss={function onDismiss() { handleAnsView() }}>
                    <span>
                        <span className="font-medium">
                            Correct Answer :
                        </span>
                        {' '}{correctAnswer}
                    </span>
                </Alert>
        </div>
    </div>
  );
};

export default Questions;



// import { Alert, Card } from 'flowbite-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Options from '../Options/Options';

// const Questions = ({ quiz, handleAns }) => {
//   const { question, options, correctAnswer} = quiz;
//     const [isActive, setIsActive] = useState(true);
//     const handleAnsView = event => {
//         setIsActive(current => !current);
//     };

//     return (
//         <div className='mt-5'>
//             <ToastContainer />
//             <Card>
//                 <div className='flex justify-center'>
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-h-screen ">
//                         {question.slice(3, -4)}
//                     </h5>
//                     <FontAwesomeIcon onClick={handleAnsView} className={isActive ? '' : 'hidden'} icon={faEye} />
//                     <FontAwesomeIcon onClick={handleAnsView} className={isActive ? 'hidden' : ''} icon={faEyeSlash} />
//                 </div>
//                 {options.map(option=>
//                   <div onClick={() => handleAns(option, question.correctAnswer)}>
//                     <Options key={option.id} option={option} correctAnswer={correctAnswer}/>
//                   </div>
//                 )
//                 }
//                 {/* {
//                     question.options.map(option =>
//                         <div onClick={() => handleAns(option, question.correctAnswer)} className='cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded'>
//                             {options}
//                         </div>
//                     )
//                 } */}
//             </Card>
//             <div className={isActive ? 'hidden' : ''}>
//                 <Alert
//                     color="success"
//                     onDismiss={function onDismiss() { handleAnsView() }}>
//                     <span>
//                         <span className="font-medium">
//                             Correct Answer :
//                         </span>
//                         {' '}{correctAnswer}
//                     </span>
//                 </Alert>
//             </div>
//         </div>
//     );
// };

// export default Questions;