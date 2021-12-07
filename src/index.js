import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const routes = (
  <Router>
    <Route exact path='/' component={ Home }/>
    <Route path='/login' component={ LoginForm }/>
    <Route path='/signup' component={ SignupForm }/>
    <Route />
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
