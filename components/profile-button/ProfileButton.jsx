import React from 'react';

import './profile-button.scss';

const ProfileButton = () => (
  <React.Fragment>
    <button
      className="profile-button__button"
      name="button"
      type="button"
    >
      <img
        alt="Humanoids"
        className="profile-button__logo"
        src="/static/images/logo-humanoids.png"
      />
      <img
        alt=""
        className="profile-button__avatar"
        src="/static/images/avatar-naomi.jpg"
      />
    </button>
  </React.Fragment>
);

export default ProfileButton;
