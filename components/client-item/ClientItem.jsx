import React from 'react';
import PropTypes from 'prop-types';

import './client-item.scss';

class ClientItem extends React.Component {
  static propTypes = {
    clientName: PropTypes.string.isRequired,
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
  }

  state = {
    isDetailWrapperVisible: false
  }

  toggleDetailWrapper = () => {
    this.setState((prevState) => ({
      isDetailWrapperVisible: !prevState.isDetailWrapperVisible
    }));
  };

  render() {
    const { isDetailWrapperVisible } = this.state;
    const {
      clientName, city, phone, email, website, avatar, id, remarks
    } = this.props;
    return (
      <div className="client-item" id={id}>
        {/* MAIN WRAPPER */}
        <div
          className="btn client-item__header"
          onClick={this.toggleDetailWrapper}
          onKeyDown={this.toggleDetailWrapper}
          role="button"
          tabIndex="0"
        >

          {/* PERSONALIA */}
          <div className="client-item__primary-wrapper">
            <img
              alt={clientName}
              className="client-item__avatar"
              src={`/static/images/${avatar}`}
            />
            <div className="client-item__personalia">
              <span className="client-item__text--primary">
                {clientName}
              </span>
              <span className="client-item__text--secondary">
                {city}
              </span>
            </div>
          </div>

          {/* WORK INFO */}
          <ul className="client-item__secondary-wrapper">
            <li className="client-item__client-info">
              <span className="client-item__text--primary">
                {phone}
              </span>
              <span className="client-item__text--secondary">
                Phone number
              </span>
            </li>
            <li className="client-item__client-info">
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
            <li className="client-item__client-info">
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={website}
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

          {/* CARET */}
          <div className="client-item__button-caret">
            <svg className={`client-item__icon-caret client-item__icon-caret${isDetailWrapperVisible ? '--up' : '--down'}`} />
          </div>
        </div>

        {/* EXPANDABLE WRAPPER */}
        <div className={`client-item__content${isDetailWrapperVisible ? '--visible' : '--hidden'}`}>
          <div className="client-item__content-title">
            {`Detailed information about ${clientName}`}
          </div>
          <ul className="client-item__content-wrapper">
            <li className="client-item__content-client-info">
              <span className="client-item__text--primary">
                {phone}
              </span>
              <span className="client-item__text--secondary">
                Phone number
              </span>
            </li>
            <li className="client-item__content-client-info">
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
            <li className="client-item__content-client-info">
              <span className="client-item__text--primary">
                <a
                  className="client-item__link"
                  href={website}
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

            {remarks && (
              <React.Fragment>
                <div className="client-item__divider" />
                <li className="client-item__content-client-info">
                  <blockquote className="client-item__blockquote client-item__text--primary">
                    {remarks}
                  </blockquote>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClientItem;
