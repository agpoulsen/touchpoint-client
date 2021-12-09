import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import Home from './Home';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Touchpoints from './Touchpoints';
import EditTouchpoint from './EditTouchpoint';
import NewTouchpoint from './NewTouchpoint';
import RouteAuthenticated from './RouteAuthenticated';

import AuthService from "../services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: null,
      userId: null
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const userId = AuthService.getUserId();

    if (user) {
      this.setState({ currentUser: user });
      this.setState({ userId})
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({ currentUser: null });
    this.setState({ userId: null});
  }

  isAuthenticated() {
    if (this.state.currentUser){
      return true;
    } else {
      return false;
    }
  }

  render() {

    const testLogin = () => {
      if (this.isAuthenticated()) {
        return <p>Logged in</p>
      } else {
        return <p>Not logged in</p>
      }
    }

    return (
      <div>

        <div className='container'>
          <nav>
            <Link to='/'>Home</Link>|
            <Link to='/:userId'> Your Touchpoints</Link>|
            <Link to='/login'>Log In</Link>|
            <Link to='/signup'>Sign Up</Link>
            {testLogin()}
            <button onClick={this.logOut}>Log Out</button>
          </nav>
          <Switch>
            <Route exact path={['/', '/home']} component={ Home }/>
            <Route exact path={'/login'} component={ LoginForm }/>
            <Route exact path={'/signup'} component={ SignupForm }/>
            <Route path={'/edit/touchpoint/:userId/:touchpointId'} component={ EditTouchpoint }/>
            <Route exact path={'/:userId/touchpoint/new'}>
              <NewTouchpoint userId={this.state.userId} />
            </Route>
            <Route path={'/:userId'}>
              <Touchpoints userId={this.state.userId} />
            </Route>

          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
