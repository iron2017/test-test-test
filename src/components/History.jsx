import React from 'react';
import ImageCarousel from './Carousel';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginLeft: '4rem',

        borderRadius: '5px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '8rem',
          display: 'flex',
          alignItems: 'center', // Align content at the center vertically
        }}
      >
        <span style={{ marginRight: '5px' }}>02</span>

        <p style={{ fontSize: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

const History = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  // Example images for demonstration
  const historyImages = [
    'https://plus.unsplash.com/premium_photo-1673254928968-b6513f32d43b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more image URLs here
  ];

  return (
    <section id="history">
      <header
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <img
            src="https://i.postimg.cc/QdM3PySM/3333.png"
            alt="Logo"
            style={{ marginRight: '10px' }}
          />
        </div>
        <div>
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              textDecoration: 'underline',
              marginRight: '10px',
            }}
            onClick={() => scrollToSection('history')}
          >
            01. History
          </button>
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            }}
            onClick={() => scrollToSection('team')}
          >
            02. Team
          </button>
        </div>
      </header>
      <ImageCarousel images={historyImages} />
      <Footer />
    </section>
  );
};

export default History;
