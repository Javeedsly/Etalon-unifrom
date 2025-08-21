// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Etalon Uniform Professional Workwear Logo" />
      <h1>Etalon Uniform</h1>
      <p>Peşəkar iş geyimləri və fərdi qorunma vasitələri üzrə ixtisaslaşmış yerli istehsalçı. Sizin işiniz üçün ən yaxşı forma!</p>
      <div className="coming-soon">Tezliklə Xidmətinizdəyik...</div>
    </div>
  );
}

export default Header;