import React from 'react';
import PropTypes from 'prop-types';

import './page-header.scss';

const PageHeader = ({ pageTitle, unitCount, unit }) => (
  <section className="page-header">
    <h1 className="page-header__title">
      { pageTitle }
      <span className="page-header__text">
        {` ${unitCount} ${unit} `}
      </span>
    </h1>

    <form className="page-header__search">
      <input
        aria-label="Search through site content"
        className="page-header__search-field"
        id="site-search"
        name="search"
        placeholder="Search"
        type="search"
      />
      <button
        className="page-header__button-search"
        type="submit"
      />
    </form>
  </section>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  unitCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default PageHeader;
