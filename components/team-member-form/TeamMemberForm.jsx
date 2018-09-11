import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import './team-member-form.scss';

class TeamMemberForm extends React.Component {
  static newTeamMemberDefaultValues = {
    teamMember: {
      firstName: '',
      lastName: '',
      employeeNumber: 'HUM_',
      email: '',
      address: '',
      zip: '',
      city: '',
      avatar: 'avatar-naomi.jpg',
      biography: '',
      socialsTwitter: '',
      socialsFacebook: '',
      jobTitle: 'Front-end developer',
      currentClient: 'Humanoids',
      startDate: '2018-09-03'
    }
  };

  static propTypes = {
    isFormSaving: PropTypes.bool.isRequired,
    onSaveTeamMember: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  }

  state = {
    newTeamMember: TeamMemberForm.newTeamMemberDefaultValues.teamMember
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
      newTeamMember: {
        ...prevState.newTeamMember,
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
    const { newTeamMember } = this.state;
    const { onSaveTeamMember } = this.props;
    event.preventDefault();

    if (!this.handleFormValidation()) {
      return;
    }

    onSaveTeamMember({ ...newTeamMember });
    this.setState({ newTeamMember: TeamMemberForm.newTeamMemberDefaultValues.teamMember });
    Router.push('/team-members');
  }

  render() {
    const { newTeamMember, validity } = this.state;
    const {
      firstName, lastName, email, address, zip, city, biography, socialsTwitter, socialsFacebook
    } = newTeamMember;
    const { isFormSaving } = this.props;
    return (
      <section className="team-member-form">
        <form id="newmember" ref={this.formElement} onSubmit={this.handleSubmit}>
          {/* TITLE WRAPPER */}
          <div className="team-member-form__title-wrapper">
            <h2 className="team-member-form__title">
              Add new team member
            </h2>

            <Link href="/team-members">
              <a className="render-whitespace--left">
                <button
                  className="btn team-member-form__button team-member-form__button--cancel"
                  type="button"
                >
                  Cancel
                </button>
              </a>
            </Link>
            <button
              className="btn team-member-form__button team-member-form__button--save"
              disabled={isFormSaving || !this.handleFormValidation()}
              type="submit"
              name="save"
              value="Save"
            >
              Save
            </button>
          </div>

          {/* FORM */}
          <div className="team-member-form__container">
            {/* TABS */}
            <div className="team-member-form__tab-row">
              <div className="team-member-form__tab">
                Personal details
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="team-member-form__form-container">

              {/* FIRST COLUMN */}
              <div className="team-member-form__first-column">
                <img
                  alt="Edit Avatar"
                  className="team-member-form__avatar"
                  src="/static/images/avatar-naomi.jpg"
                />
                <p>
                  <a
                    className="text-link"
                    href="#"
                  >
                    Edit Avatar
                  </a>
                </p>
              </div>

              {/* SECOND COLUMN */}
              <div className="team-member-form__second-column">
                <div className="team-member-form__name">
                  {/* FIRST NAME */}
                  <label
                    className="team-member-form__label team-member-form__label--half"
                    htmlFor="first-name"
                  >
                    First name
                    <input
                      className={`team-member-form__input team-member-form__input--${!validity || validity.firstName ? 'valid' : 'invalid'}`}
                      id="first-name"
                      name="firstName"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={firstName}
                    />
                  </label>
                  {/* LAST NAME */}
                  <label
                    className="team-member-form__label"
                    htmlFor="last-name"
                  >
                    Last name
                    <input
                      className={`team-member-form__input team-member-form__input--${!validity || validity.lastName ? 'valid' : 'invalid'}`}
                      id="last-name"
                      name="lastName"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      required
                      type="text"
                      value={lastName}
                    />
                  </label>
                </div>
                {/* EMAIL */}
                <label
                  className="team-member-form__label"
                  htmlFor="email"
                >
                  E-mail Address
                  <input
                    className={`team-member-form__input
                      team-member-form__input--${!validity || validity.email ? 'valid' : 'invalid'}`}
                    id="email"
                    name="email"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                    type="text"
                    value={email}
                  />
                </label>
                {/* BIOGRAPHY */}
                <label
                  className="team-member-form__label"
                  htmlFor="bio"
                >
                  Bio
                  <textarea
                    className="team-member-form__textarea"
                    form="newmember"
                    id="biography"
                    name="biography"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    value={biography}
                  />
                </label>
              </div>

              <div className="team-member-form__divider" />

              {/* LAST COLUMN */}
              <div className="team-member-form__last-column">
                {/* ADDRESS */}
                <label
                  className="team-member-form__label"
                  htmlFor="address"
                >
                  Address
                  <input
                    className={`team-member-form__input
                      team-member-form__input--${!validity || validity.address ? 'valid' : 'invalid'}`}
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
                <div className="team-member-form__zipcity">
                  {/* ZIP CODE */}
                  <label
                    className="team-member-form__label team-member-form__label--half"
                    htmlFor="zip"
                  >
                    ZIP code
                    <input
                      className={`team-member-form__input
                        team-member-form__input--${!validity || validity.zip ? 'valid' : 'invalid'}`}
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
                    className="team-member-form__label"
                    htmlFor="city"
                  >
                    City
                    <input
                      className={`team-member-form__input team-member-form__input--${!validity
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
                <label className="team-member-form__label">
                  Social profiles
                  {/* TWITTER */}
                  <div className="team-member-form__twitter">
                    <div className="team-member-form__logo-box team-member-form__logo-box--twitter">
                      <img
                        alt="Twitter"
                        className="team-member-form__icon-socials"
                        src="/static/icons/twitter.svg"
                      />
                    </div>
                    <input
                      className="team-member-form__input team-member-form__input-twitter"
                      id="twitter"
                      name="socialsTwitter"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={socialsTwitter}
                    />
                  </div>
                  {/* FACEBOOK */}
                  <div className="team-member-form__facebook">
                    <div className="team-member-form__logo-box team-member-form__logo-box--facebook">
                      <img
                        alt="Facebook"
                        className="team-member-form__icon-socials"
                        src="/static/icons/facebook.svg"
                      />
                    </div>
                    <input
                      className="team-member-form__input team-member-form__input-facebook"
                      id="facebook"
                      name="socialsFacebook"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={socialsFacebook}
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

export default TeamMemberForm;
