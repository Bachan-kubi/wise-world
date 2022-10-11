import React from 'react';
import './Options.css';

const Options = ({option}) => {
    return (
        <div className='option'>
            <input type='radio' name='options'/>
            <p>{option}</p>
        </div>
    );
};

export default Options;