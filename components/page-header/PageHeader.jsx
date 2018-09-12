import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../select-box/SelectBox';

import './page-header.scss';

const PageHeader = ({
  pageTitle, onFilterTimeEntries, unitCount, unit
}) => (
  <section className="page-header">
    <h1 className="page-header__title">
      { pageTitle }
      <span className="page-header__text">
        {` ${unitCount} ${unit} `}
      </span>
    </h1>

    <SelectBox onFilterTimeEntries={onFilterTimeEntries} />

    <div className="page-header__search">
      <form
        className="page-header__form"
      >
        <input
          aria-label="Search through site content"
          className="page-header__searchbar"
          id="site-search"
          name="search"
          placeholder="Search"
          type="search"
        />
        <button
          className="page-header__button-search"
          type="button"
        />
      </form>
    </div>
  </section>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  onFilterTimeEntries: PropTypes.func.isRequired,
  unitCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default PageHeader;
