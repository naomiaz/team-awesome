import React from 'react';
import { connect } from 'react-redux';
import { loginDataSelector } from '../../ducks/login';
import Index from './Index';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  loginData: loginDataSelector(state)
});

const IndexContainer = (props) => (
  <Index {...props} />
);

// Props of parent are equal to props of child
IndexContainer.propTypes = Index.propTypes;

export default connect(mapStateToProps, null)(IndexContainer);
