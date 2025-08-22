// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Etalon Uniform Loqosu" />
        </div>
        <div className="footer-section">
          <h3>Kateqoriyalar</h3>
          <ul>
            <li>İş geyimləri</li>
            <li>Ayaqqabılar</li>
            <li>Fərdi qorunma</li>
            <li>Əlcəklər</li>
            <li>Aksesuarlar</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Əlaqə</h3>
          <p>
            {/* DƏYİŞİKLİKLƏR BURADA BAŞLAYIR */}
            <a href="tel:+994552150884" title="Bizə zəng edin (mobil)">+994 55 215 08 84</a><br />
            <a href="tel:+994102365071" title="Bizə zəng edin (şəhər)">+994 10 236 50 71</a><br />
            <a href="mailto:info@etalonuniform.az" title="E-poçt göndərin">info@etalonuniform.az</a>
            {/* DƏYİŞİKLİKLƏR BURADA BİTİR */}
          </p>
        </div>
      </div>
      <div className="footer-bottom">©{new Date().getFullYear()} Etalon Uniform. Bütün hüquqlar qorunur.</div>
    </footer>
  );
}

export default Footer;