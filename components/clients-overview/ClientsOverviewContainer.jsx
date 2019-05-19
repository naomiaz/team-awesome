import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getClientsSelector,
  requestClients,
  saveClient,
  sortClientsBy,
  sortClientsDirection,
  clientsSortBySelector,
  clientsSortDirectionSelector
} from '../../ducks/clients';
import ClientsOverview from './ClientsOverview';

const mapStateToProps = (state) => ({
  clients: getClientsSelector(state),
  sortBy: clientsSortBySelector(state),
  sortDirection: clientsSortDirectionSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRequestClients: requestClients,
  onSaveClient: saveClient,
  onSortClientsBy: sortClientsBy,
  onSortClientsDirection: sortClientsDirection
}, dispatch);

const ClientsOverviewContainer = (props) => (
  <ClientsOverview {...props} />
);

ClientsOverviewContainer.propTypes = ClientsOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsOverviewContainer);
