import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {Guide} from "./components/Guide/Guide";
import {Quiz} from "./components/Quiz/Quiz";

function App() {
    return (
        <Router>
            <Route path='/' exact component={Home}/>
            <Route path='/play/guide' component={Guide}/>
            <Route path='/play/game' component={Quiz}/>
        </Router>
    );
}

export default App;
