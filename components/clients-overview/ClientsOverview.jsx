import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import ClientItem from '../client-item/ClientItem';

import './clients-overview.scss';

class ClientItem extends React.Component {
  static propTypes = {
    // onRequestTeamMembers: PropTypes.func.isRequired,
    // onSaveTeamMember: PropTypes.func.isRequired,
    // onSortTeamMembersBy: PropTypes.func.isRequired,
    // onSortTeamMembersDirection: PropTypes.func.isRequired,
    // sortBy: PropTypes.string.isRequired,
    // sortDirection: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        client: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        CoC: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        remarks: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
    ).isRequired
  }

  componentDidMount() {
    // const { onRequestTeamMembers } = this.props;
    // onRequestTeamMembers();
  }

  render() {
    const {
      clients, onSortTeamMembersBy, onSortTeamMembersDirection, sortBy, sortDirection
    } = this.props;

    return (
      <section className="clients-overview">
        <div className="clients-overview__header">
          <h2 className="clients-overview__title">
            All Clients
          </h2>

          <Link href="/add-new-team-member">
            <button
              className="btn clients-overview__button-new render-whitespace--left"
              type="button"
            >
              <svg className="clients-overview__icon-plus" />
              New Client
            </button>
          </Link>

          <select
            className="input-field clients-overview__filter"
            name="sortBy"
            value={sortBy}
            id="select"
            onChange={({ target }) => onSortTeamMembersBy(target.value)}
          >
            <option value="">Sort by:</option>
            <option value="employeeNumber">Employee #</option>
            <option value="jobTitle">Job Title</option>
            <option value="lastName">Last Name</option>
          </select>

          <select
            className="input-field clients-overview__filter"
            name="sortDirection"
            onChange={({ target }) => onSortTeamMembersDirection(target.value)}
            value={sortDirection}
            id="select"
          >
            <option value="ascending">A-Z (asc)</option>
            <option value="descending">Z-A (desc)</option>
          </select>
        </div>

        <ul>
          {clients && clients.map((currentClient, index) => (
            <li key={currentClient.id}>
              <ClientItem
                index={index}
                {...currentClient}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClientItem;
