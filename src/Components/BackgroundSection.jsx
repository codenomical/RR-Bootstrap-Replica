// Made this file since I wasn't sure where to put it. I figured since we made a component file to just add it here.
import React from 'react';

const BackgroundSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundColor: '[green-color]',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Add your address form and other content here */}
    </div>
  );
};

export default BackgroundSection;