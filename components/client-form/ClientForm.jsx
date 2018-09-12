import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import './client-form.scss';

class ClientForm extends React.Component {
  static newClientDefaultValues = {
    client: {
      clientName: '',
      address: '',
      zip: '',
      city: '',
      CoC: '',
      email: '',
      phone: '',
      website: '',
      avatar: 'avatar-humanoids.jpg',
      remarks: ''
    }
  };

  static propTypes = {
    isFormSaving: PropTypes.bool.isRequired,
    onSaveClient: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  }

  state = {
    newClient: ClientForm.newClientDefaultValues.client
  };

  handleBlur = ({ target }) => {
    this.setState(({ validity }) => ({
      validity: {
        ...validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      newClient: {
        ...prevState.newClient,
        [target.name]: target.value
      }
    }));
  }

  handleFormValidation = () => (
    // First check if the formElement exists
    // Then loop over each formElement and check its validity -> .every() returns boolean
    this.formElement.current
    && Array.from(this.formElement.current.elements)
      .every((input) => input.validity.valid)
  )

  handleSubmit = (event) => {
    const { newClient } = this.state;
    const { onSaveClient } = this.props;
    event.preventDefault();

    if (!this.handleFormValidation()) {
      return;
    }

    onSaveClient({ ...newClient });
    this.setState({ newClient: ClientForm.newClientDefaultValues.client });
    Router.push('/clients');
  }

  render() {
    const { newClient, validity } = this.state;
    const {
      clientName, CoC, email, address, zip, city, remarks, website, phone
    } = newClient;
    const { isFormSaving } = this.props;
    return (
      <section className="client-form">
        <form
          id="newclient"
          ref={this.formElement}
          onSubmit={this.handleSubmit}
        >
          {/* TITLE WRAPPER */}
          <div className="client-form__header">
            <h2 className="client-form__title">
              Add new client
            </h2>

            <Link href="/clients">
              <a className="render-whitespace--left">
                <button
                  className="btn client-form__button client-form__button--cancel"
                  type="button"
                >
                  Cancel
                </button>
              </a>
            </Link>
            <button
              className="btn client-form__button client-form__button--save"
              disabled={isFormSaving || !this.handleFormValidation()}
              type="submit"
              name="save"
              value="Save"
            >
              Save
            </button>
          </div>

          {/* FORM */}
          <div className="client-form__container">
            {/* TABS */}
            <div className="client-form__tab-row">
              <div className="client-form__tab">
                Client details
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="client-form__form-container">

              {/* FIRST COLUMN */}
              <div className="client-form__first-column">
                <img
                  alt="Edit Avatar"
                  className="client-form__avatar"
                  src="/static/images/avatar-humanoids.jpg"
                />
                <p>
                  <a
                    className="text-link"
                    href="#"
                  >
                    Edit Logo
                  </a>
                </p>
              </div>

              {/* SECOND COLUMN */}
              <div className="client-form__second-column">
                {/* CLIENT NAME */}
                <label
                  className="client-form__label"
                  htmlFor="clientName"
                >
                  Client name
                  <input
                    className={`client-form__input client-form__input--${!validity || validity.clientName ? 'valid' : 'invalid'}`}
                    id="clientName"
                    name="clientName"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                    value={clientName}
                  />
                </label>
                {/* CoC */}
                <label
                  className="client-form__label"
                  htmlFor="CoC"
                >
                  Chamber of Commerce
                  <input
                    className={`client-form__input
                      client-form__input--${!validity || validity.CoC ? 'valid' : 'invalid'}`}
                    id="CoC"
                    name="CoC"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                    value={CoC}
                  />
                </label>
                {/* REMARKS */}
                <label
                  className="client-form__label"
                  htmlFor="remarks"
                >
                  Remarks
                  <textarea
                    className="client-form__textarea"
                    form="newclient"
                    id="remarks"
                    name="remarks"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    value={remarks}
                  />
                </label>
              </div>

              <div className="client-form__divider" />

              {/* LAST COLUMN */}
              <div className="client-form__last-column">
                {/* ADDRESS */}
                <label
                  className="client-form__label"
                  htmlFor="address"
                >
                  Address
                  <input
                    className={`client-form__input
                      client-form__input--${!validity || validity.address ? 'valid' : 'invalid'}`}
                    id="address"
                    name="address"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    title="Fill in this field"
                    type="text"
                    value={address}
                  />
                </label>
                <div className="client-form__zipcity">
                  {/* ZIP CODE */}
                  <label
                    className="client-form__label client-form__label--half"
                    htmlFor="zip"
                  >
                    ZIP code
                    <input
                      className={`client-form__input
                        client-form__input--${!validity || validity.zip ? 'valid' : 'invalid'}`}
                      id="zip"
                      name="zip"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={zip}
                    />
                  </label>
                  {/* CITY */}
                  <label
                    className="client-form__label"
                    htmlFor="city"
                  >
                    City
                    <input
                      className={`client-form__input client-form__input--${!validity
                        || validity.city ? 'valid' : 'invalid'}`}
                      id="city"
                      name="city"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={city}
                    />
                  </label>
                </div>

                <label className="client-form__label">
                  Contact details
                  {/* PHONE */}
                  <div className="client-form__contact">
                    <div className="client-form__icon-box client-form__icon-box--icon-phone" />
                    <input
                      className="client-form__input client-form__input-contact"
                      id="phone"
                      name="phone"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={phone}
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="client-form__contact">
                    <div className="client-form__icon-box client-form__icon-box--icon-email" />
                    <input
                      className="client-form__input client-form__input-contact"
                      id="email"
                      name="email"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={email}
                    />
                  </div>
                  {/* WEBSITE */}
                  <div className="client-form__contact">
                    <div className="client-form__icon-box client-form__icon-box--icon-website" />
                    <input
                      className="client-form__input client-form__input-contact"
                      id="website"
                      name="website"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={website}
                    />
                  </div>
                </label>
              </div>

            </div>
          </div>

        </form>
      </section>
    );
  }
}

export default ClientForm;
