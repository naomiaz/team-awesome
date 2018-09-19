import React from 'react';
import { ClientNamesModel } from '../../ducks/clients';
import SelectBox from '../../shared/components/select-box/SelectBox';

import './time-entry-page-header.scss';

export interface TimeEntryPageHeaderProps {
  activeFilter: string,
  clientNames: ClientNamesModel[];
  pageTitle: string,
  onFilterTimeEntries;
  unitCount: number
  unit: string
}

const TimeEntryPageHeader = ({
  activeFilter, clientNames, pageTitle, onFilterTimeEntries, unitCount, unit
}: TimeEntryPageHeaderProps) => (
  <section className="time-entry-page-header">
    <h1 className="time-entry-page-header__title">
      { pageTitle }
      <span className="time-entry-page-header__text">
        {` ${unitCount} ${unit} `}
      </span>
    </h1>

    <div className="time-entry-page-header__button-wrapper">
      <SelectBox
        selectedValue={activeFilter}
        onChange={(event) => onFilterTimeEntries(event.target.value)}
        options={[{ title: 'All clients:', value: '' }, ...clientNames]}
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
    </div>
  </section>
);

export default TimeEntryPageHeader;
