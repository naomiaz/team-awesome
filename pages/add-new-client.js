import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import ClientFormContainer from '../components/client-form/ClientFormContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <ClientFormContainer />
  </React.Fragment>
);
