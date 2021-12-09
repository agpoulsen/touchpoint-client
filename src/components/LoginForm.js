import React, { Component } from 'react'
import axios from 'axios';

import AuthService from "../services/auth.service";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value})
  };

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleLogin(e) {
    e.preventDefault();

    AuthService.login(this.state.email, this.state.password).then(
      () => {
        this.props.history.push("/home");
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  };

  render() {
    return (

      <div className='container'>

        <h1>Login</h1>

        <form onSubmit={ this.handleLogin }>
          <label>
            Email:
            <input name='email' type="email" onChange={ this.onChangeEmail } required/>
          </label>

          <label>
            Password:
            <input name='password' type="password" onChange={ this.onChangePassword } required/>
          </label>

          <button>Log In</button>

        </form>
      </div>
    )
  }
}
