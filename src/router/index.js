import React from "react";

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!components/home/index.js';
import Page1 from 'bundle-loader?lazy&name=page1!components/page1/index.js';
import counter from 'bundle-loader?lazy&name=counter!pages/counter/index.js';
import userInfo from 'bundle-loader?lazy&name=userInfo!pages/userInfo/index.js';
import Index from 'bundle-loader?lazy&name=index!pages/index/index.js';
import classNamesPage from 'bundle-loader?lazy&name=classNames!pages/classNames/index.js'

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/userInfo">userInfo</Link></li>
                    <li><Link to="/index">index</Link></li>
                    <li><Link to="/classNamesPage">classNamesPage</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/counter" component={createComponent(counter)}/>
                    <Route path="/userInfo" component={createComponent(userInfo)}/>
                    <Route path="/index" component={createComponent(Index)}/>
                    <Route path="/classNamesPage" component={createComponent(classNamesPage)}/>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;

