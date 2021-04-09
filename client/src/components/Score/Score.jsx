import React from 'react';
import {Link} from "react-router-dom";

export const Score = ({questions, score}) => {
    return (
        <div>
            <h2>Score</h2>
            <p>Total questions: {questions.length}</p>
            <p>Correct answers: {score}</p>
            <p>Wrong answers: {questions.length - score}</p>
            
            <Link to='/quiz/' className='btn btn-exit'>exit</Link>
        </div>
    );
};
