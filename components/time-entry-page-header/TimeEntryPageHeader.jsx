import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../../services/components/select-box/SelectBox';

import './time-entry-page-header.scss';

const TimeEntryPageHeader = ({
  activeFilter, clientNames, pageTitle, onFilterTimeEntries, unitCount, unit
}) => (
  <section className="time-entry-page-header">
    <h1 className="time-entry-page-header__title">
      { pageTitle }
      <span className="time-entry-page-header__text">
        {` ${unitCount} ${unit} `}
      </span>
    </h1>

    <SelectBox
      className="render-whitespace--left"
      defaultValue={activeFilter}
      onChange={(event) => onFilterTimeEntries(event.target.value)}
      options={clientNames}
    />

    <form className="time-entry-page-header__search">
      <input
        aria-label="Search through site content"
        className="time-entry-page-header__search-field"
        id="site-search"
        name="search"
        placeholder="Search"
        type="search"
      />
      <button
        className="time-entry-page-header__button-search"
        type="submit"
      />
    </form>
  </section>
);

TimeEntryPageHeader.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  clientNames: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  pageTitle: PropTypes.string.isRequired,
  onFilterTimeEntries: PropTypes.func.isRequired,
  unitCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default TimeEntryPageHeader;
