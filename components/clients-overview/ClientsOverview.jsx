import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '../../shared/components/button/Button';
import PageHeader from '../../shared/components/page-header/PageHeader';
import SelectBox from '../../shared/components/select-box/SelectBox';
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
        id: PropTypes.string.isRequired
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
      <React.Fragment>
        <PageHeader
          pageTitle="Clients"
          unitCount={clients.length}
          unitPlural="Clients"
          unitSingular="Client"
        />

        <section className="clients-overview">
          <div className="clients-overview__header">
            <h2 className="clients-overview__title">
              All Clients
            </h2>

            <Link href="/add-new-client">
              <Button
                className="clients-overview__button-new render-whitespace--left"
                type="button"
                value="New Client"
              />
            </Link>

            <SelectBox
              className="clients-overview__filter"
              selectedValue={sortBy}
              name="sortBy"
              onChange={(event) => onSortClientsBy(event.target.value)}
              options={[
                { title: 'Sort by:', value: '' },
                { title: 'Client', value: 'clientName' },
                { title: 'City', value: 'city' }
              ]}
            />

            <SelectBox
              className="clients-overview__filter"
              selectedValue={sortDirection}
              name="sortDirection"
              onChange={(event) => onSortClientsDirection(event.target.value)}
              options={[
                { title: 'A-Z (asc)', value: 'ascending' },
                { title: 'Z-A (desc)', value: 'descending' }
              ]}
            />
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
      </React.Fragment>
    );
  }
}

export default ClientsOverview;
