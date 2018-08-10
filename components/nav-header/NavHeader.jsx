import React from 'react';
import PropTypes from 'prop-types';

import './NavHeader.scss';

class NavHeader extends React.Component {
  state = { open: false };

  menuOpen = () => {
    // setState accepts a function with the first parameter being the current state,
    // the return value of the function will update the state.
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const { title } = this.props;
    return (
      <header className="header">

        <div className="logo">
          <a href="/" className="logo__title">
            { title }
          </a>
        </div>

        <button
          className={`menu-btn ${open ? ' menu-btn--open' : ''}`}
          name="button"
          onClick={this.menuOpen}
          type="button"
        >
          <img src="../../static/icons/hamburger.svg" className="menu-btn-icon menu-btn-icon--open" alt="" />
          <img src="../../static/icons/close.svg" className="menu-btn-icon menu-btn-icon--close" alt="" />
        </button>

        <nav className={`main-nav ${open ? ' main-nav--open' : ''}`}>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--active" href="/timesheets">
                Timesheets
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="/team">
                Team members
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="/projects">
                Projects
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="/clients">
                Clients
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="/documents">
                Documents
              </a>
            </li>
          </ul>
        </nav>

        <div className="btn-wrapper">
          <button type="button" name="button" className="profile-btn">
            <img src="../../static/images/logo-humanoids.png" alt="" className="profile-btn__img--logo" />
            <img src="../../static/images/avatar-naomi.jpg" alt="" className="profile-btn__img--user" />
          </button>
          <button type="button" name="button" className="arrow-btn">
            <img src="../../static/icons/arrow-down.svg" alt="" />
          </button>
        </div>

      </header>
    );
  }
}

NavHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavHeader;
