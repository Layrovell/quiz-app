import React from 'react';
import {Link} from "react-router-dom";

export const Guide = () => {
    return (
        <section className="App">
            <span className="roll rotating" />
            Hello, i'm a guide

            <div className='guide-buttons'>
                <Link to='/quiz/' className='btn btn-back'>go back</Link>
                <Link to='/quiz/play/game' className='btn btn-forward'>play</Link>
            </div>
        </section>
    );
};
