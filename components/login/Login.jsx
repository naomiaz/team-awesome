import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';
// import Router from 'next/router';
import Button from '../../shared/components/button/Button';
import InputField from '../../shared/components/input-field/InputField';

import './login.scss';

class Login extends React.Component {
  static loginDefaultValues = {
    loginData: {
      email: '',
      password: ''
    }
  };

  state = { loginData: Login.loginDefaultValues.loginData };

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      loginData: {
        ...prevState.loginData,
        [target.name]: target.value
      }
    }));
  };

  render() {
    const { email, password } = this.state.loginData;
    return (
      <div className="login">
        <div className="login__wrapper">
          <form className="login__form">
            <h1 className="login__logo">Team Awesome</h1>
            <label
              className="login__label"
              htmlFor="email"
            >
              E-mail address
              <InputField
                className="login__input"
                name="email"
                onChange={this.handleChange}
                placeholder="email@humanoids.nl"
                type="text"
                value={email}
              />
            </label>
            <label
              className="login__label"
              htmlFor="password"
            >
              Password
              <InputField
                className="login__input"
                name="password"
                onChange={this.handleChange}
                // required
                type="password"
                value={password}
              />
            </label>
            <Link href="/">
              <Button
                className="login__button"
                value="Sign in"
                type="submit"
              />
            </Link>
          </form>
          <div className="login__footer">
            <a
              className="login__link"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
