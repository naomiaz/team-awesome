import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../../services/components/select-box/SelectBox';

import './page-header.scss';

const PageHeader = ({
  activeFilter, clientNames, pageTitle, onFilterTimeEntries, unitCount, unit
}) => (
  <section className="page-header">
    <h1 className="page-header__title">
      { pageTitle }
      <span className="page-header__text">
        {` ${unitCount} ${unit} `}
      </span>
    </h1>

    <SelectBox
      className="render-whitespace--left"
      defaultValue={activeFilter}
      name="filter"
      onChangeFunction={(event) => onFilterTimeEntries(event.target.value)}
      options={clientNames}
      // options={[
      //   { title: 'All clients:', value: '' },
      //   { title: 'Paard of Rotterdam', value: 'Paard of Rotterdam' },
      //   { title: 'Saab', value: 'Saab' },
      //   { title: 'Mercedes', value: 'Mercedes' },
      //   { title: 'Audi', value: 'Audi' }
      // ]}
    />

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
  activeFilter: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  onFilterTimeEntries: PropTypes.func.isRequired,
  unitCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default PageHeader;
