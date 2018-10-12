import React from 'react';

import './profile-button.scss';

const ProfileButton = () => (
  <React.Fragment>
    <a href="/login">
      <button
        className="profile-button__button"
        name="button"
        type="button"
      >
        <img
          alt="Logo Humanoids"
          className="profile-button__logo"
          src="/static/images/logo-humanoids.png"
        />
        <img
          alt="Avatar"
          className="profile-button__avatar"
          src="/static/images/avatar-naomi.jpg"
        />
      </button>
    </a>
  </React.Fragment>
);

export default ProfileButton;
