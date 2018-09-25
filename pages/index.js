import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import TimeEntryOverview from '../components/time-entry-overview';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <TimeEntryOverview />
  </React.Fragment>
);


// class Index extends React.Component {
//   componentDidMount() {
//     Router.push('/login');
//   }
//
//   render() {
//     return (
//       <React.Fragment>
//         <NavHeaderContainer siteName="Team Awesome" />
//         <TimeEntryOverview />
//       </React.Fragment>
//     );
//   }
// }
//
// export default Index;
