import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import './main-nav.scss';

const MainNav = ({ isMenuVisible, menuItems, router }) => (
  <nav className={`main-nav ${isMenuVisible ? 'main-nav--open' : ''}`}>
    <ul className="main-nav__list">
      {menuItems.map((item) => (
        <li className="main-nav__item" key={`${item.id}`}>
          <Link href={item.path}>
            <a className={`main-nav__link${(router.pathname === item.path) ? ' main-nav__link--active' : ''}`}>
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

MainNav.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  router: PropTypes.object.isRequired
};

export default withRouter(MainNav);
