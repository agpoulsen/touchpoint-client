import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import AuthService from "../services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({ currentUser: user});
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div>

        <div className='container'>
          <Switch>
            <Route exact path={['/', '/home']} component={ Home }/>
            <Route exact path={'/login'} component={ LoginForm }/>
            <Route exact path={'/signup'} component={ SignupForm }/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
