import React from 'react';
import PropTypes from 'prop-types';

import './main-nav.scss';

const MainNav = ({ isMenuVisible }) => (
  <nav className={`main-nav ${isMenuVisible ? 'main-nav--open' : ''}`}>
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
        <a
          className="main-nav__link"
          href="/projects"
        >
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
);

MainNav.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired
};

export default MainNav;
