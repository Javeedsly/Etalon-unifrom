// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Etalon Uniform Professional Workwear Logo" />
      {/* DƏYİŞİKLİK BURADADIR */}
      <h1>Etalon Uniform: Peşəkar İş Geyimləri və Uniformalar</h1>
      <p>Azərbaycanda yüksək keyfiyyətli iş geyimləri, təhlükəsizlik ayaqqabıları və fərdi qorunma vasitələri üzrə ixtisaslaşmış yerli istehsalçı. Sizin işiniz üçün ən yaxşı forma!</p>
      <div className="coming-soon">Tezliklə Xidmətinizdəyik...</div>
    </div>
  );
}

export default Header;