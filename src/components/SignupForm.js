import React, { Component } from 'react'

import AuthService from "../services/auth.service";

export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      successful: false,
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }



  _handleSubmit(event) {
    event.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    AuthService.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.passwordConfirm
    ).then( response => {
      this.setState({
        message: response.data.message,
        successful: true
      })
    },
      error => {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
      })
      .then(() => {
        this.props.history.push("/home");
      });;
  }

  render() {
    return (
      <div className='container'>
        <h1>Sign Up</h1>

        <form onSubmit={ this._handleSubmit }>
          <label>
            Name:
            <input name='name' type="text" required onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input name='email' type="email" required onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input name='password' type="password" required onChange={this.handleChange} />
          </label>

          <label>
            Password Confirm:
            <input name='passwordConfirm' type="password" required onChange={this.handleChange} />
          </label>

          <button>Sign Up!</button>

        </form>
      </div>
    )
  }
}
