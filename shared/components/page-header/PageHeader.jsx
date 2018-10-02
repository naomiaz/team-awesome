import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../select-box/SelectBox';

import './page-header.scss';

const PageHeader = ({
  pageTitle, selectBox, unitCount, unitSingular, unitPlural
}) => (
  <section className="page-header">
    <h1 className="page-header__title">
      { pageTitle }
      <span className="page-header__text">
        {`${unitCount} ${unitCount === 1 ? unitSingular : unitPlural}`}
      </span>
    </h1>

    <div className="page-header__button-wrapper">
      {selectBox.map((currentSelectBox, index) => (
        <SelectBox
          key={index} // eslint-disable-line
          {...currentSelectBox}
        />
      ))
      }

      <form className="page-header__search">
        <input
          className="page-header__search-field"
          name="search"
          placeholder="Search"
          type="search"
        />
        <button
          className="page-header__button-search"
          type="submit"
        />
      </form>
    </div>
  </section>
);

PageHeader.defaultProps = {
  selectBox: []
};

PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  selectBox: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      name: PropTypes.string,
      onChange: PropTypes.func.isRequired,
      options: PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired,
      selectedValue: PropTypes.string.isRequired
    })
  ),
  unitCount: PropTypes.number.isRequired,
  unitSingular: PropTypes.string.isRequired,
  unitPlural: PropTypes.string.isRequired
};

export default PageHeader;
