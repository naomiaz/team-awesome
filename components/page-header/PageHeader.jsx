import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

const PageHeader = ({ pageTitle, count, unit }) => (
  <section className="page-header">
    <div className="page-header__title-wrapper">
      <h2 className="page-header__title">
        { pageTitle }
      </h2>
      <p className="page-header__text">
        { count }
        &nbsp;
        { unit }
      </p>
    </div>

    <div className="page-header__search">
      <form action="/search_page.php">
        <input className="page-header__searchbar" type="search" id="site-search" name="search" placeholder="Search" aria-label="Search through site content" />
        <button className="page-header__searchbar-btn" type="button">
          <img src="../../static/icons/magnifying-glass.svg" alt="" className="" />
        </button>
      </form>
    </div>
  </section>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default PageHeader;
