import React from 'react';
import './style/Profile.css'; 

const Profile = ({ profile, onAddressClick }) => {
  const { name, photo, description, address } = profile;

  const handleAddressClick = () => {
    onAddressClick(address);
  };

  return (
    <div className="profile-card">
      <img className="profile-photo" src={photo} alt={name} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
      <button className="view-address-btn" onClick={handleAddressClick}>View Address</button>
    </div>
  );
};

export default Profile;

