import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import NavHeader from '../nav-header/NavHeader';
import TimeEntryOverview from '../time-entry-overview';


class Timesheets extends React.Component {
  static propTypes = {
    loginData: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    }).isRequired
  }

  componentDidMount() {
    const { email, password } = this.props.loginData;
    if (email === 'admin' && password === 'admin') {
      return;
    }
    Router.push('/login');
  }

  render() {
    return (
      <React.Fragment>
        <NavHeader siteName="Team Awesome" />
        <TimeEntryOverview />
      </React.Fragment>
    );
  }
}

export default Timesheets;
