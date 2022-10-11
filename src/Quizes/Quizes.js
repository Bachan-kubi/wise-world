import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizes = useLoaderData();
    const {total} = quizes;
    return (
        <div>
            <h3>quisex</h3>
            <p>{total}</p>
        </div>
    );
};

export default Quizes;