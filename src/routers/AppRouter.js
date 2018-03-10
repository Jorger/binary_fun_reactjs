import React from "react";
import HomePage from '../components/HomePage';
import GamePage from '../components/GamePage';
import NotFoundPage from '../components/NotFoundPage';
import AboutPage from '../components/AboutPage';

import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from "react-router-dom";

const AppRouter = () => (
    <Router>
        <div className="container">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/game/:size" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
  </Router>
);

export default AppRouter;