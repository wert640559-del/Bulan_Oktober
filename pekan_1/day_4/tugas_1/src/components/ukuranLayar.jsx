import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function UkuranLayar() {
  const width = useWindowWidth();
  let gambar = '';
  let deskripsi = '';

  switch (true) {
    case width < 320:
      gambar = 'iphonese.png';
      deskripsi = 'iPhone SE';
      break;
    case width >= 320 && width <= 480:
      gambar = 'iphone5.png';
      deskripsi = 'iPhone 5';
      break;
    case width >= 481 && width <= 768:
      gambar = 'iPadMini.png';
      deskripsi = 'iPad Mini';
      break;
    case width >= 769 && width <= 1024:
      gambar = 'ipad.png';
      deskripsi = 'iPad';
      break;
    case width >= 1025 && width <= 1280:
      gambar = 'macbookAir.jpg';
      deskripsi = 'Macbook Air';
      break;
    case width >= 1281 && width <= 1536:
      gambar = 'MacbookPro.jpg';
      deskripsi = 'Macbook Pro';
      break;
    default:
      gambar = 'dekstop.png';
      deskripsi = 'Dekstop';
  }

  return (
    <div>
      <h1>Ukuran Layar Anda: {width}px</h1>
      <h2>Contoh Ukuran Layar</h2>
      <p>{deskripsi}</p>
      <img src={gambar} alt="Ukuran layar" />
    </div>
  );
}

export default UkuranLayar;
