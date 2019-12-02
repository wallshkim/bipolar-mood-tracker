import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import './RegisterPage.css';
import OrangeLogo from '../../images/compassblackfont.png';


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.firstName && this.state.lastName && this.state.email) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="register-container">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className="RegisterPage-Form" onSubmit={this.registerUser}>
          <div className="logo-container">
            <img src={OrangeLogo} alt="logo" height="300" />
          </div>
          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="username"
              placeholder="Username"
              // label="Hours"
              value={this.state.username}
              type="text"
              margin="normal"
              variant='outlined'
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="firstName"
              placeholder="First Name"
              // label="Hours"
              value={this.state.firstName}
              type="text"
              margin="normal"
              variant='outlined'
              onChange={this.handleInputChangeFor('firstName')}
            />
          </div>
          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="lastName"
              placeholder="Last Name"
              // label="Hours"
              value={this.state.lastName}
              type="text"
              margin="normal"
              variant='outlined'
              onChange={this.handleInputChangeFor('lastName')}
            />
          </div>
          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="email"
              placeholder="Email Address"
              // label="Hours"
              value={this.state.email}
              type="email"
              margin="normal"
              variant='outlined'
              onChange={this.handleInputChangeFor('email')}
            />
          </div>
          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="password"
              placeholder="Password"
              // label="Hours"
              value={this.state.password}
              type="password"
              margin="normal"
              variant='outlined'
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
          {/* <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div> */}
          <div>
            <input
              style={{ maxWidth: '350px', minWidth: '350px' }}
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <span>Already have an account?</span>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

