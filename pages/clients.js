import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import ClientsOverviewContainer from '../components/clients-overview/ClientsOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <ClientsOverviewContainer />
  </React.Fragment>
);
