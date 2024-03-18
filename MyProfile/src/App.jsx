import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import profiles from './components/data';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleAddressClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseMap = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Indian Actors Profile</h1>
      </header>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            profile={profile}
            onAddressClick={() => handleAddressClick(profile)}
          />
        ))}
      </div>
      {selectedProfile && (
        <div className="map-overlay">
          <div className="map-container">
            <button className="close-btn" onClick={handleCloseMap}>Close Map</button>
            <h2>{selectedProfile.name} Location</h2>
            <div className="map-wrapper">
              <MapContainer center={[selectedProfile.coordinates.lat, selectedProfile.coordinates.lng]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[selectedProfile.coordinates.lat, selectedProfile.coordinates.lng]}>
                  <Popup>
                    {selectedProfile.address}
                  </Popup>
                </Marker>
                <ZoomControl position="bottomright" />
              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

