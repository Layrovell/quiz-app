import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <section className="App">
            <h1>Quiz App</h1>
            <div className='button-container'>
                <Link to='/quiz/play/guide' className='btn btn-play'>Play</Link>
            </div>
            <div className='auth-container'>
                <Link to='/quiz/login/' className="btn btn-login">Login</Link>
                <Link to='/quiz/register/' className="btn btn-register">Register</Link>
            </div>
        </section>
    );
};
