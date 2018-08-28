import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isMenuVisibleSelector,
  setMenuVisibility
} from '../../ducks/nav-header';
import NavHeader from './NavHeader';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  isMenuVisible: isMenuVisibleSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleMenuVisibility: setMenuVisibility
}, dispatch);

const NavHeaderContainer = (props) => (
  <NavHeader {...props} />
);

// Props of parent are equal to props of child
NavHeaderContainer.propTypes = NavHeader.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavHeaderContainer);
