import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getClientsSelector, isFormSavingSelector, saveClient } from '../../ducks/clients';
import ClientForm from './ClientForm';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  clients: getClientsSelector(state),
  isFormSaving: isFormSavingSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSaveClient: saveClient
}, dispatch);

const ClientFormContainer = (props) => (
  <ClientForm {...props} />
);

// Props of parent are equal to props of child
ClientFormContainer.propTypes = ClientForm.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientFormContainer);
