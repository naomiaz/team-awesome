import React from 'react';
import PropTypes from 'prop-types';

import './client-item.scss';


class ClientItem extends React.Component {
  static propTypes = {
    clientName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    remarks: PropTypes.string.isRequired
  }

  state = {
    isDetailWrapperVisible: false
  };

  toggleDetailWrapper = () => {
    this.setState((prevState) => ({
      isDetailWrapperVisible: !prevState.isDetailWrapperVisible
    }));
  };

  formatPhoneNumber = (number) => {
    const areaCode = number.substring(0, 3);
    const subscriberNumber = number.substring(number.length - 7);
    return `${areaCode}-${subscriberNumber}`;
  };

  render() {
    const { isDetailWrapperVisible } = this.state;
    const {
      avatar, clientName, city, email, phone, remarks, website
    } = this.props;
    return (
      <React.Fragment>
        <div
          className="btn client-item__body"
          onClick={this.toggleDetailWrapper}
          onKeyDown={this.toggleDetailWrapper}
          role="button"
          tabIndex="0"
        >

          <div className="client-item__personalia">
            <img
              alt={clientName}
              className="client-item__avatar"
              src={`/static/images/${avatar}`}
            />
            <div className="
              client-item__personalia-data
              client-item__text-block"
            >
              <span className="client-item__text--primary">
                {clientName}
              </span>
              <span className="client-item__text--secondary">
                {city}
              </span>
            </div>
          </div>

          <ul className="client-item__client-info">
            <li className="client-item__text-block">
              <span className="client-item__text--primary">
                {this.formatPhoneNumber(phone)}
              </span>
              <span className="client-item__text--secondary">
                Phone number
              </span>
            </li>
            <li className="client-item__text-block">
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </span>
              <span className="client-item__text--secondary">
                E-mail address
              </span>
            </li>
            <li className="client-item__text-block">
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={`http://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website}
                </a>
              </span>
              <span className="client-item__text--secondary">
                Website
              </span>
            </li>
          </ul>

          <div className={`
            client-item__button-caret
            client-item__button-caret${isDetailWrapperVisible ? '--up' : '--down'}`}
          />
        </div>

        <div className={`client-item__body-expandable${isDetailWrapperVisible ? '--visible' : '--hidden'}`}>
          <div className="client-item__subtitle">
            {`Detailed information about ${clientName}`}
          </div>
          <ul className="
            client-item__client-info
            client-item__client-info--expandable"
          >
            <li className="
              client-item__text-block
              client-item__text-block--expandable"
            >
              <span className="client-item__text--primary">
                {this.formatPhoneNumber(phone)}
              </span>
              <span className="client-item__text--secondary">
                Phone number
              </span>
            </li>
            <li className="
              client-item__text-block
              client-item__text-block--expandable"
            >
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </span>
              <span className="client-item__text--secondary">
                E-mail address
              </span>
            </li>
            <li className="
              client-item__text-block
              client-item__text-block--expandable"
            >
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={`http://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website}
                </a>
              </span>
              <span className="client-item__text--secondary">
                Website
              </span>
            </li>
          </ul>

          {remarks && (
            <React.Fragment>
              <div className="client-item__divider" />
              <blockquote className="
                client-item__blockquote
                client-item__text--primary"
              >
                {remarks}
              </blockquote>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ClientItem;
