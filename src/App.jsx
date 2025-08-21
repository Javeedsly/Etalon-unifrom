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
      {/* ================= SEO Bloku Başlayır ================= */}
      
      {/* 1. Əsas Meta Teqlər (React 19 ilə) */}
      <title>Etalon Uniform | Peşəkar İş Geyimləri və Fərdi Qorunma Vasitələri</title>
      <meta name="description" content="Etalon Uniform - Azərbaycanda peşəkar iş geyimləri, təhlükəsizlik ayaqqabıları və fərdi qorunma vasitələrinin (FPV) yerli istehsalı və satışı. Yüksək keyfiyyət və münasib qiymət." />
      {/* Genişləndirilmiş açar sözlər */}
      <meta name="keywords" content="iş geyimləri, uniforma, peşəkar geyim, işçi geyimləri, fərdi qorunma vasitələri, təhlükəsizlik ayaqqabısı, xüsusi geyimlər, tibbi uniforma, qoruyucu geyimlər, yerli istehsal, Etalon Uniform, Баку, рабочая одежда в Баку, спецодежда" />
      <link rel="canonical" href="https://etalonuniform.az/" />
      {/* Əlavə edilmiş SEO teqləri */}
      <meta name="author" content="Etalon Uniform" />
      <meta name="robots" content="index, follow" />

      {/* 2. Open Graph Teqləri (Facebook, LinkedIn, WhatsApp və s. üçün) */}
      <meta property="og:title" content="Etalon Uniform | Peşəkar İş Geyimləri və Fərdi Qorunma" />
      <meta property="og:description" content="Yüksək keyfiyyətli peşəkar iş geyimləri və FPV-lərin Azərbaycanda yerli istehsalçısı. Keyfiyyət və etibar bizim standartımızdır." />
      <meta property="og:image" content="https://www.etalonuniform.az/social-preview.jpg" />
      <meta property="og:url" content="https://www.etalonuniform.az/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="az_AZ" />
      <meta property="og:site_name" content="Etalon Uniform" />

      {/* 3. Twitter Card Teqləri (Twitter-də paylaşım üçün) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Etalon Uniform | Peşəkar İş Geyimləri və Fərdi Qorunma" />
      <meta name="twitter:description" content="Yüksək keyfiyyətli peşəkar iş geyimləri və FPV-lərin Azərbaycanda yerli istehsalçısı." />
      <meta name="twitter:image" content="https://www.etalonuniform.az/social-preview.jpg" />
      
      {/* ================= SEO Bloku Bitir ================= */}

      {loading && <LoadingScreen isHidden={hiding} />}

      <div className="page-container">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;