// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
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
      {loading && <LoadingScreen isHidden={hiding} />}

      <div className="page-container">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;