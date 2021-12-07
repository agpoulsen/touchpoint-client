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
      currentUser: null
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      this.setState({ currentUser: user});
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({ currentUser: null})
  }

  render() {

    const testLogin = () => {
      if (this.state.currentUser) {
        return <p>Logged in</p>
      } else {
        return <p>Not logged in</p>
      }
    }

    return (
      <div>

        <div className='container'>
          <nav>
            {testLogin()}
            <button onClick={this.logOut}>Log OUt</button>
          </nav>
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
