// src/components/LoadingScreen.jsx
import React from 'react';

function LoadingScreen({ isHidden }) {
  return (
    <div id="loading-screen" className={isHidden ? 'hidden' : ''}>
      <div className="loader"></div>
    </div>
  );
}

export default LoadingScreen;