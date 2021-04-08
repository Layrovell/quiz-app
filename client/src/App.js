import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {Guide} from "./pages/Guide/Guide";
import {Quiz} from "./pages/Quiz/Quiz";
import {Login} from "./pages/Login/Login";
import {Registration} from "./pages/Registration/Registration";

function App() {
    return (
        <Router>
            <Route path='/quiz' exact component={Home}/>
            <Route path='/quiz/play/guide' component={Guide}/>
            <Route path='/quiz/login' component={Login}/>
            <Route path='/quiz/register' component={Registration}/>
            <Route path='/quiz/play/game' component={Quiz}/>
        </Router>
    );
}

export default App;
