// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';

// Komponentləri import edirik
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
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
      <title>Etalon Uniform | Peşəkar İş Geyimləri və Fərdi Qorunma Vasitələri</title>
      <meta name="description" content="Etalon Uniform - Yerli istehsalçı olaraq, müxtəlif sektorlar üçün yüksək keyfiyyətli iş geyimləri, təhlükəsizlik ayaqqabıları və fərdi qorunma vasitələri təklif edir." />
      <link rel="canonical" href="https://etalonuniform.az/" />
      <meta name="keywords" content="iş geyimləri, fərdi qorunma vasitələri, peşəkar geyim, işçi geyimləri, uniforma, təhlükəsizlik ayaqqabısı, yerli istehsal, Etalon Uniform" />
      
      {loading && <LoadingScreen isHidden={hiding} />}

      <div className="page-container">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;