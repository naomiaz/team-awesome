import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginDataSelector, saveLoginData } from '../../ducks/login';
import Login from './Login';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  loginData: loginDataSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSaveLoginData: saveLoginData
}, dispatch);

const LoginContainer = (props) => (
  <Login {...props} />
);

// Props of parent are equal to props of child
LoginContainer.propTypes = Login.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
