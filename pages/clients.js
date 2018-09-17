import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../components/page-header/PageHeader';
import ClientsOverviewContainer from '../components/clients-overview/ClientsOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Clients"
      unitCount={3}
      unit="Clients"
    />
    <ClientsOverviewContainer />
  </React.Fragment>
);
