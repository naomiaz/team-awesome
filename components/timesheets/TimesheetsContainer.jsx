import React from 'react';
import { connect } from 'react-redux';
import { loginDataSelector } from '../../ducks/login';
import Timesheets from './Timesheets';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  loginData: loginDataSelector(state)
});

const TimesheetsContainer = (props) => (
  <Timesheets {...props} />
);

// Props of parent are equal to props of child
TimesheetsContainer.propTypes = Timesheets.propTypes;

export default connect(mapStateToProps, null)(TimesheetsContainer);
