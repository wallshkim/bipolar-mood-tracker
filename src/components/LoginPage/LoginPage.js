import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import './LoginPage.css';

import Logo from '../../images/logo.png';
import OrangeLogo from '../../images/compassblackfont.png';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  populateFields = () => {
    this.setState({
      username: 'NinaSimone',
      password: 'ninasimone'
    })
  }

  render() {
    return (
      <div className="login-container">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form className="LoginPage-Form" onSubmit={this.login}>
          <div className="logo-container">
            <button
              type="button"
              // className="link-button"
              onClick={this.populateFields}
            >
              <img src={OrangeLogo} alt="logo" height="300" />
            </button>
          </div>
          {/* <h1>Login</h1> */}

          <div className="TextField-without-border-radius">
            <TextField
              style={{ maxWidth: '350px', minWidth: '350px' }}
              id="username"
              placeholder="Username"
              // label="Username"
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

          {/* <div>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div> */}

          <div>
            <input
              style={{ maxWidth: '350px', minWidth: '350px' }}
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <center>
          <span>Don't have an account yet?</span>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
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

export default connect(mapStateToProps)(LoginPage);
