import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../components/page-header/PageHeader';
import ClientsOverview from '../components/clients-overview/ClientsOverview';
// import ClientsOverviewContainer from '../components/clients-overview/ClientsOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Clients"
      unitCount={3}
      unit="Clients"
    />
    <ClientsOverview />
    {/* <ClientsOverviewContainer /> */}
  </React.Fragment>
);
