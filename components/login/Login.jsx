import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Button from '../../shared/components/button/Button';
import InputField from '../../shared/components/input-field/InputField';

import './login.scss';

class Login extends React.Component {
  static loginDefaultValues = {
    loginData: {
      email: 'admin',
      password: 'admin'
    }
  };

  static propTypes = {
    loginData: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    }).isRequired,
    onRegister: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  }

  state = { loginData: Login.loginDefaultValues.loginData };

  componentDidMount() {
    const { email, password } = this.props.loginData;
    if (email === 'admin' && password === 'admin') {
      Router.push('/');
    }
  }

  handleBlur = ({ target }) => {
    this.setState((prevState) => ({
      validity: {
        ...prevState.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      loginData: {
        ...prevState.loginData,
        [target.name]: target.value
      }
    }));
  };

  handleFormValidation = () => (
    this.formElement.current && Array
      .from(this.formElement.current.elements)
      .every((input) => input.validity.valid)
  )

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginData } = this.state;
    if (this.handleFormValidation()) {
      this.props.onRegister(loginData);
      this.setState({ loginData: Login.loginDefaultValues.loginData });
      Router.push('/');
    }
  }

  render() {
    const { email, password } = this.state.loginData;
    return (
      <div className="login">
        <div className="login__body">
          <form
            className="login__form"
            ref={this.formElement}
            onSubmit={this.handleSubmit}
          >
            <h1 className="login__logo">Team Awesome</h1>
            <label
              className="login__label"
              htmlFor="email"
            >
              E-mail address
              <InputField
                className="login__input"
                name="email"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                placeholder="email@humanoids.nl"
                required
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
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                placeholder="********"
                required
                type="password"
                value={password}
              />
            </label>
            <Button
              className="login__button"
              value="Sign in"
              type="submit"
            />
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
