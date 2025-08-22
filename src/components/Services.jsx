import React from 'react';

function Services() {
  return (
    <section className="services-section" style={{ padding: '20px', background: '#1a1a1a', textAlign: 'center' }}>
      <h2>Xidmətlərimiz</h2>
      <div style={{ margin: '15px 0' }}>
        <h3>Fərdi Dizaynla Uniforma Tikilişi</h3>
        <p>Şirkətinizin korporativ kimliyinə uyğun xüsusi dizaynda iş geyimləri hazırlayırıq.</p>
      </div>
      <div style={{ margin: '15px 0' }}>
        <h3>Geyimlərə Loqo Vurulması</h3>
        <p>İş geyimlərinizin üzərinə istənilən ölçüdə və rəngdə loqonuzun çapını və ya naxışını həyata keçiririk.</p>
      </div>
    </section>
  );
}

export default Services;