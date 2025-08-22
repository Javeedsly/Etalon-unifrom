// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
// YENİ KOMPONENTLƏRİ İMPORT EDİN
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHiding(true);
    }, 600);
    const removeTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 1100);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen isHidden={hiding} />}

      <div className="page-container">
        <Header />
        
        {/* DƏYİŞİKLİK BURADA BAŞLAYIR */}
        <main>
          {/* Saytınızın tam versiyası hazır olduqda bu sətirləri aktivləşdirin (şərhləri silin) */}
          {/* <AboutUs /> */}
          {/* <Services /> */}
        </main>
        {/* DƏYİŞİKLİK BURADA BİTİR */}

        <Footer />
      </div>
    </>
  );
}

export default App;