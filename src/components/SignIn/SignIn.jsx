import React from 'react';
import './SignIn.scss';

export const SignIn = () => {

    return (
        <section className="App">
            <form action="" className="sign-in-form">
                <label>Email
                    <input name="email" type="email" autoComplete="username"/>
                </label>

                <label>Password
                    <button type="button" className="show-hide">Show password</button>
                    <input name="password" type="password" autoComplete="current-password"/>
                    <p className="text">Eight or more characters, with at least one lowercase and one uppercase
                        letter.</p>
                </label>

                <button className="sign-in-btn">Sign In</button>
            </form>
        </section>
    );
};
