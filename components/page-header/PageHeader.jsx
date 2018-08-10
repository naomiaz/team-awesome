import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

const PageHeader = ({ pageTitle, unitCount, unit }) => (
  <section className="page-header">
    <div className="page-header__title-wrapper">
      <h2 className="page-header__title">
        { pageTitle }
      </h2>
      <p className="page-header__text">
        { unitCount }
        &nbsp;
        { unit }
      </p>
    </div>

    <div className="page-header__search">
      <form action="/search_page.php">
        <input
          aria-label="Search through site content"
          className="page-header__searchbar"
          id="site-search"
          name="search"
          placeholder="Search"
          type="search"
        />
        <button
          className="page-header__searchbar-btn"
          type="button"
        >
          <img
            alt=""
            src="../../static/icons/magnifying-glass.svg"
          />
        </button>
      </form>
    </div>
  </section>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  unitCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default PageHeader;
