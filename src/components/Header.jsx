import React from 'react';

const Header = () => {
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
    <header
      className="header"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',

        backgroundSize: 'cover',
        zIndex: 100,
        textAlign: 'center',
      }}
    >
      <nav
        className="header-nav"
        style={{ float: 'right', marginRight: '20px' }}
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'inline-block',
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ display: 'inline-block', margin: '0 10px 10px 10px' }}>
            <button
              className="header-btn"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'white',
                fontWeight: 400,
                cursor: 'pointer',
                fontSize: '16px', // Font size set to 16px
                fontFamily: 'Arial, sans-serif', // Specify the desired font family
              }}
              onClick={() => scrollToSection('history')}
            >
              01.History
            </button>
          </li>
          <li style={{ display: 'inline-block', margin: '0px 10px 10px 10px' }}>
            <button
              className="header-btn"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'white',
                fontWeight: 400,
                cursor: 'pointer',
                fontSize: '16px', // Font size set to 16px
                fontFamily: 'Arial, sans-serif', // Specify the desired font family
              }}
              onClick={() => scrollToSection('team')}
            >
              02.Team
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
