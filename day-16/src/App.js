import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import your other components here
import { Homepage } from './Homepage';
import { About } from './About';
import { Projects } from './Projects';

class App extends Component {
    render() {
        return (<div>
                    <Router>
                        <div className="container">
                            <Link to="/">Home</Link>
                            { ' - ' }
                            <Link to="/projects">Projects</Link>
                            { ' - ' }
                            <Link to="/about">About</Link>
                            <Route exact path="/" component={ Homepage } />
                            <Route path="/projects" component={ Projects } />
                            <Route path="/about" component={ About } />
                        </div>
                    </Router>
                </div>
            );
    }
}

export default App;
