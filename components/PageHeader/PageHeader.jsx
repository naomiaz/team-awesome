import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

const TimesheetHeader = ({ pageTitle, count, unit }) => (
  <section className="timesheet-header">
    <div className="timesheet-header__title-wrapper">
      <h2 className="timesheet-header__title">
        { pageTitle }
      </h2>
      <p className="timesheet-header__text">
        { count }
        &nbsp;
        { unit }
      </p>
    </div>

    <div className="timesheet-header__search">
      <form action="/action_page.php">
        <input className="timesheet-header__searchbar" type="search" id="site-search" name="search" placeholder="Search" aria-label="Search through site content" />
      </form>
    </div>
  </section>
);

TimesheetHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

export default TimesheetHeader;
