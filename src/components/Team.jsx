import React, { useState } from 'react';

const Team = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const handleImageSwitch = (imageNumber) => {
    setSelectedImage(imageNumber);
  };

  const teamHeaderStyles = {
    textAlign: 'center',
    backgroundColor: '#404E6B',
    color: 'grey',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flext-start',
    marginLeft: '25%',
  };

  const imageContainerStyles = {
    position: 'relative',
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
  };

  const scheduleStyles = {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '300px',
  };

  const activeButtonStyles = {
    backgroundColor: '#e3e6ef',
    color: '#404E6B',
    border: 'none',
    borderRadius: '0',
  };

  const inactiveButtonStyles = {
    backgroundColor: '#404E6B',
    color: '#a8adb8',
    border: 'none',
    borderRadius: '0',
  };

  return (
    <div id="team">
      <header style={teamHeaderStyles}>
        <div style={buttonContainerStyles}>
          <button
            style={
              selectedImage === 1 ? activeButtonStyles : inactiveButtonStyles
            }
            onClick={() => handleImageSwitch(1)}
          >
            MOUNTAIN 1
          </button>
          <button
            style={
              selectedImage === 2 ? activeButtonStyles : inactiveButtonStyles
            }
            onClick={() => handleImageSwitch(2)}
          >
            MOUNTAIN 2
          </button>
        </div>
      </header>
      <div style={imageContainerStyles}>
        {selectedImage === 1 ? (
          <img
            src="https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 1"
            style={imageStyles}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1597027269532-558925ca9ea2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 2"
            style={imageStyles}
          />
        )}
        <div style={scheduleStyles}>
          <h3>Schedule</h3>
          <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
            <li>22/12/2023 end date</li>
            <li>23/12/2023 weekend</li>
            <li>24/12/2023 weekend</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
