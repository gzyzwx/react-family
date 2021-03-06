import React from "react";

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from '../components/home/index.js';
import Page1 from '../components/page1/index.js';

const getRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;

