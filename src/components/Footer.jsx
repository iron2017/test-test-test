import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#404E6B',
    color: '#63769d',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyles = {
    width: '50px', // Adjust the width as needed
    marginRight: '10px', // Adjust spacing between image and text
  };

  return (
    <footer style={footerStyles}>
      <img
        src="https://via.placeholder.com/50" // Replace with your image URL
        alt="Logo"
        style={imageStyles}
      />
      <p>
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
