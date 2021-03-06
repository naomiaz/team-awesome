import React from 'react';
import PropTypes from 'prop-types';

import MainNav from '../main-nav/MainNav';
import ProfileButton from '../profile-button/ProfileButton';

import './nav-header.scss';

class NavHeader extends React.Component {
  static propTypes = {
    siteName: PropTypes.string.isRequired
  }

  state = {
    isMenuVisible: false
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      isMenuVisible: !prevState.isMenuVisible
    }));
  };


  render() {
    const { siteName } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <header className="header">

        <a
          className="header__logo"
          href="/"
        >
          {siteName}
        </a>

        <button
          className={`mobile-nav__button ${isMenuVisible ? 'mobile-nav__button--open' : ''}`}
          name="button"
          onClick={this.toggleMenu}
          type="button"
        >
          <img
            alt="Open"
            className="mobile-nav__icon mobile-nav__icon--open"
            src="../../static/icons/hamburger.svg"
          />
          <img
            alt="Close"
            className="mobile-nav__icon mobile-nav__icon--close"
            src="../../static/icons/close.svg"
          />
        </button>

        <MainNav
          isMenuVisible={isMenuVisible}
          menuItems={[
            {
              id: '1', title: 'Timesheets', path: '/'
            },
            {
              id: '2', title: 'Team members', path: '/team-members', keyword: 'team'
            },
            {
              id: '3', title: 'Projects', path: '/projects', keyword: 'project'
            },
            {
              id: '4', title: 'Clients', path: '/clients', keyword: 'client'
            },
            {
              id: '5', title: 'Documents', path: '/documents', keyword: 'document'
            }
          ]}
        />

        <ProfileButton />

      </header>
    );
  }
}

export default NavHeader;
