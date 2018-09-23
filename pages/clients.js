import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import ClientsOverviewContainer from '../components/clients-overview/ClientsOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <ClientsOverviewContainer />
  </React.Fragment>
);
