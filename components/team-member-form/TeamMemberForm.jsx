import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import Button from '../../shared/components/button/Button';
import InputField from '../../shared/components/input-field/InputField';

import './team-member-form.scss';

class TeamMemberForm extends React.Component {
  static newTeamMemberDefaultValues = {
    teamMember: {
      firstName: '',
      lastName: '',
      employeeNumber: '',
      email: '',
      address: '',
      zip: '',
      city: '',
      avatar: 'avatar-naomi.jpg',
      biography: 'Lorem ipsum dolor sit amet',
      socialsTwitter: '',
      socialsFacebook: '',
      jobTitle: 'Front-end developer',
      currentClient: 'Humanoids',
      startDate: '2018-09-03'
    }
  };

  static propTypes = {
    isFormSaving: PropTypes.bool.isRequired,
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        employeeNumber: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        socialsTwitter: PropTypes.string.isRequired,
        socialsFacebook: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        currentClient: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired
      })
    ).isRequired,
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

  addOne = (number) => (number + 1)

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTeamMember } = this.state;
    const { onSaveTeamMember, teamMembers } = this.props;
    const newTeamMemberFormatted = {
      ...newTeamMember,
      employeeNumber: `HUM_${this.addOne(teamMembers.length).toString().padStart(3, '0')}`
    };

    if (!this.handleFormValidation()) {
      return;
    }

    onSaveTeamMember(newTeamMemberFormatted);
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
        <form
          id="newmember"
          ref={this.formElement}
          onSubmit={this.handleSubmit}
        >
          {/* TITLE WRAPPER */}
          <div className="team-member-form__header">
            <h2 className="team-member-form__title">
              Add new team member
            </h2>

            <Link href="/team-members">
              <a className="render-whitespace--left">
                <Button
                  className="
                    team-member-form__button
                    team-member-form__button-cancel
                  "
                  type="button"
                  value="Cancel"
                />
              </a>
            </Link>
            <Button
              className="team-member-form__button"
              disabled={isFormSaving || !this.handleFormValidation()}
              type="submit"
              value="Save"
            />
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
                  src="/static/images/avatar-humanoids.jpg"
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
                    className="
                      team-member-form__label
                      team-member-form__label--half
                    "
                    htmlFor="first-name"
                  >
                    First name
                    <InputField
                      className={`
                        team-member-form__input
                        team-member-form__input--${!validity || validity.firstName ? 'valid' : 'invalid'}
                      `}
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
                    <InputField
                      className={`
                        team-member-form__input
                        team-member-form__input--${!validity || validity.lastName ? 'valid' : 'invalid'}
                      `}
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
                  <InputField
                    className={`
                      team-member-form__input
                      team-member-form__input--${!validity || validity.email ? 'valid' : 'invalid'}
                    `}
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
                  <InputField
                    className={`
                      team-member-form__input
                      team-member-form__input--${!validity || validity.address ? 'valid' : 'invalid'}
                    `}
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
                    className="
                      team-member-form__label
                      team-member-form__label--half
                    "
                    htmlFor="zip"
                  >
                    ZIP code
                    <InputField
                      className={`
                        team-member-form__input
                        team-member-form__input--${!validity || validity.zip ? 'valid' : 'invalid'}
                      `}
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
                    <InputField
                      className={`
                        team-member-form__input
                        team-member-form__input--${!validity || validity.city ? 'valid' : 'invalid'}
                      `}
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
                  <div className="team-member-form__socials">
                    <div className="
                      team-member-form__icon-box
                      team-member-form__icon-box--icon-twitter
                    "
                    />
                    <InputField
                      className="
                        team-member-form__input
                        team-member-form__input-socials
                      "
                      name="socialsTwitter"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      type="text"
                      value={socialsTwitter}
                    />
                  </div>
                  {/* FACEBOOK */}
                  <div className="team-member-form__socials">
                    <div className="
                      team-member-form__icon-box
                      team-member-form__icon-box--icon-facebook
                    "
                    />
                    <InputField
                      className="
                        team-member-form__input
                        team-member-form__input-socials
                      "
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
