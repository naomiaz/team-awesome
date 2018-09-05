import React from 'react';
import Link from 'next/link';

import './team-member-form.scss';

class TeamMemberForm extends React.Component {
  state = {
  };

  render() {
    return (
      <section className="team-member-form row">
        <form action="" id="newmember">
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
              onClick={this.handleFormVisibility}
              type="submit"
            >
              Save
            </button>
          </div>

          {/* FORM */}
          <div className="team-member-form__tab-form-container">
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
                  src="../../static/images/avatar-naomi.jpg"
                />
                <p>Edit Avatar</p>
              </div>

              {/* SECOND COLUMN */}
              <div className="team-member-form__second-column">
                <div className="team-member-form__name">
                  <div className="team-member-form__first-name">
                    <label className="team-member-form__label" htmlFor="first-name">
                      First name
                      <input className="team-member-form__input" type="text" name="first-name" id="first-name" />
                    </label>
                  </div>
                  <div className="team-member-form__last-name">
                    <label className="team-member-form__label" htmlFor="last-name">
                      Last name
                      <input className="team-member-form__input" type="text" id="last-name" name="last-name" />
                    </label>
                  </div>
                </div>
                <div className="team-member-form__email">
                  <label className="team-member-form__label" htmlFor="email">
                    E-mail Address
                    <input className="team-member-form__input" type="text" id="email" name="email" />
                  </label>
                </div>
                <div className="team-member-form__bio">
                  <label className="team-member-form__label" htmlFor="bio">
                    Bio
                    <textarea className="team-member-form__textarea" form="newmember" id="bio" name="bio" />
                  </label>
                </div>
              </div>

              <div className="team-member-form__divider" />

              {/* LAST COLUMN */}
              <div className="team-member-form__last-column">
                <div className="team-member-form__address">
                  <label className="team-member-form__label" htmlFor="address">
                    Address
                    <input className="team-member-form__input" type="text" id="address" name="address" />
                  </label>
                </div>
                <div className="team-member-form__zipcity">
                  <div className="team-member-form__zip">
                    <label className="team-member-form__label" htmlFor="zip">
                      ZIP code
                      <input className="team-member-form__input" type="text" name="zip" id="zip" />
                    </label>
                  </div>
                  <div className="team-member-form__city">
                    <label className="team-member-form__label" htmlFor="city">
                      City
                      <input className="team-member-form__input" type="text" id="city" name="city" />
                    </label>
                  </div>
                </div>
                <div className="team-member-form__socials">
                  <label className="team-member-form__label">
                    Social profiles
                    <div className="team-member-form__twitter">
                      <div className="team-member-form__logo-box team-member-form__logo-box--twitter">
                        <img className="team-member-form__icon-socials" src="../../static/icons/twitter.svg" alt="Twitter" />
                      </div>
                      <input className="team-member-form__input team-member-form__input--twitter" type="text" id="twitter" name="twitter" />
                    </div>
                    <div className="team-member-form__facebook">
                      <div className="team-member-form__logo-box team-member-form__logo-box--facebook">
                        <img className="team-member-form__icon-socials" src="../../static/icons/facebook.svg" alt="Facebook" />
                      </div>
                      <input className="team-member-form__input team-member-form__input--facebook" type="text" id="facebook" name="facebook" />
                    </div>
                  </label>
                </div>
              </div>

            </div>
          </div>

        </form>
      </section>
    );
  }
}

export default TeamMemberForm;
