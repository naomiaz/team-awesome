import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ClientItem from '../client-item/ClientItem';

import './clients-overview.scss';

class ClientsOverview extends React.Component {
  static propTypes = {
    onRequestClients: PropTypes.func.isRequired,
    onSaveClient: PropTypes.func.isRequired,
    onSortClientsBy: PropTypes.func.isRequired,
    onSortClientsDirection: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        clientName: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        chamberOfCommerce: PropTypes.string.isRequired,
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
    this.props.onRequestClients();
  }

  render() {
    const {
      clients, onSortClientsBy, onSortClientsDirection, sortBy, sortDirection
    } = this.props;

    return (
      <section className="clients-overview">
        <div className="clients-overview__header">
          <h2 className="clients-overview__title">
            All Clients
          </h2>

          <Link href="/add-new-client">
            <button
              className="
                btn
                clients-overview__button-new
                render-whitespace--left
              "
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
            onChange={({ target }) => onSortClientsBy(target.value)}
          >
            <option value="">Sort by:</option>
            <option value="clientName">Client</option>
            <option value="city">City</option>
          </select>

          <select
            className="
              input-field
              clients-overview__filter
            "
            name="sortDirection"
            onChange={({ target }) => onSortClientsDirection(target.value)}
            value={sortDirection}
            id="select"
          >
            <option value="ascending">A-Z (asc)</option>
            <option value="descending">Z-A (desc)</option>
          </select>
        </div>

        <ul>
          {clients && clients.map((currentClient) => (
            <li
              key={currentClient.id}
              id={currentClient.id}
              className="client-item"
            >
              <ClientItem {...currentClient} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClientsOverview;
