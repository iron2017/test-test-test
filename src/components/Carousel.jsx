import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
      <div
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <img
          src={images[currentIndex]}
          alt={`landscape ${currentIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`landscape ${index}`}
            style={{
              width: '60px',
              height: '60px',
              margin: '0 5px',
              opacity: currentIndex === index ? 1 : 0.5,
              borderRadius: '5px',
              border: currentIndex === index ? '2px solid #ffffff' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
