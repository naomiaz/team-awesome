import React from 'react';

import './profile-button.scss';

const ProfileButton = () => (
  // <div className="profile-button__wrapper">
  <React.Fragment>
    <button
      className="button-profile"
      name="button"
      type="button"
    >
      <img
        alt="Humanoids"
        className="button-profile__logo"
        src="/static/images/logo-humanoids.png"
      />
      <img
        alt=""
        className="button-profile__avatar"
        src="/static/images/avatar-naomi.jpg"
      />
      {/* <img
        alt=""
        className="button-profile__icon-arrow"
        src="/static/icons/arrow-down.svg"
      /> */}
    </button>
  </React.Fragment>
  // </div>
);

export default ProfileButton;
