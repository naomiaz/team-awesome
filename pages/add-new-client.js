import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import ClientFormContainer from '../components/client-form/ClientFormContainer';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <ClientFormContainer />
  </React.Fragment>
);
