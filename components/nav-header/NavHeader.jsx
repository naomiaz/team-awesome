import React from 'react';
import PropTypes from 'prop-types';

import './nav-header.scss';

class NavHeader extends React.Component {
  static propTypes = {
    siteName: PropTypes.string.isRequired,
    isMenuVisible: PropTypes.bool.isRequired,
    onToggleMenuVisibility: PropTypes.func.isRequired
  }

  toggleMenu = () => {
    const { isMenuVisible, onToggleMenuVisibility } = this.props;
    onToggleMenuVisibility(!isMenuVisible);
  };


  render() {
    const { isMenuVisible, siteName } = this.props;
    return (
      <header className="header">

        <div className="logo">
          <a
            className="logo__title"
            href="/"
          >
            { siteName }
          </a>
        </div>

        <button
          className={`menu-btn ${isMenuVisible ? ' menu-btn--open' : ''}`}
          name="button"
          onClick={this.toggleMenu}
          type="button"
        >
          <img
            alt=""
            className="menu-btn-icon menu-btn-icon--open"
            src="../../static/icons/hamburger.svg"
          />
          <img
            alt=""
            className="menu-btn-icon menu-btn-icon--close"
            src="../../static/icons/close.svg"
          />
        </button>

        <nav className={`main-nav ${isMenuVisible ? ' main-nav--open' : ''}`}>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a
                className="main-nav__link main-nav__link--active"
                href="/"
              >
                Timesheets
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="/team-members"
              >
                Team members
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="/projects">
                Projects
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="/clients"
              >
                Clients
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="/documents"
              >
                Documents
              </a>
            </li>
          </ul>
        </nav>

        <div className="btn-wrapper">
          <button
            className="btn profile-btn"
            name="button"
            type="button"
          >
            <img
              alt="Humanoids"
              className="profile-btn__img--logo"
              src="/static/images/logo-humanoids.png"
            />
            <img
              alt=""
              className="profile-btn__img--user"
              src="/static/images/avatar-naomi.jpg"
            />
          </button>

          <button
            className="btn arrow-btn"
            name="button"
            type="button"
          >
            <img
              alt=""
              src="/static/icons/arrow-down.svg"
            />
          </button>
        </div>

      </header>
    );
  }
}

export default NavHeader;
