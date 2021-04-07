import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {Guide} from "./components/Quiz/Guide/Guide";
import {Quiz} from "./components/Quiz/Quiz";
import {SignIn} from "./components/SignIn/SignIn";

function App() {
    return (
        <Router>
            <Route path='/quiz' exact component={Home}/>
            <Route path='/quiz/play/guide' component={Guide}/>
            <Route path='/quiz/login' component={SignIn}/>
            <Route path='/quiz/register' component={Guide}/>
            <Route path='/quiz/play/game' component={Quiz}/>
        </Router>
    );
}

export default App;
