import {Route} from 'react-router-dom';
import React from "react";
import {linkTo} from './index';
import {Guide} from '../pages/Guide/Guide';
import {Login} from '../pages/Login/Login';
import {Registration} from '../pages/Registration/Registration';
import {Quiz} from '../pages/Quiz/Quiz';
import App from '../pages/Home/App';

export const routes = (
    <>
        <Route path={linkTo.index} exact component={App}/>
        <Route path={linkTo.guide} component={Guide}/>
        <Route path={linkTo.login} component={Login}/>
        <Route path={linkTo.register} component={Registration}/>
        <Route path={linkTo.quiz} component={Quiz}/>
    </>
)
