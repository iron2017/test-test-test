import React from 'react';

const Content = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="big-image"
      style={{ margin: '0px', padding: '0px', position: 'relative' }}
    >
      {/* Adjust marginTop based on header height */}
      <img
        src="https://images.unsplash.com/photo-1560710990-9f5d4197b5a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        alt="Mountains"
      />

      {/* Button container at the top-end of the image */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '2rem', // Align buttons to the right
          color: 'white',
          display: 'flex',

          alignItems: 'flex-end', // Align items to the end
        }}
      >
        <button
          className="header-btn"
          style={{
            border: 'none',
            background: 'transparent',
            color: 'white',
            fontWeight: '200',
            cursor: 'pointer',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            textDecoration: 'underline',
            // Adjust spacing between buttons
          }}
          onClick={() => scrollToSection('history')}
        >
          01.History
        </button>
        <button
          className="header-btn"
          style={{
            border: 'none',
            background: 'transparent',
            color: 'white',
            fontWeight: '200',
            cursor: 'pointer',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            textDecoration: 'underline',
          }}
          onClick={() => scrollToSection('team')}
        >
          02.Team
        </button>
      </div>

      {/* Text over the image */}
      <div
        style={{
          position: 'absolute',
          top: '150px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <span
          style={{
            marginTop: '10px',
            backgroundColor: 'transparent',
            fontSize: '28px',
            fontWeight: '200',
          }}
        >
          LOS ANGELES MOUNTAINS
        </span>
      </div>
    </div>
  );
};

export default Content;
