import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import DashboardProfile from './pages/DashboardProfile';
import DashboardSettings from './pages/DashboardSetting';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <h1>Aplikasi React Router</h1>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/about">Tentang</Link></li>
          <li><Link to="/contact">Kontak</Link></li>
          <li><Link to="/products/1">Produk 1</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> {/* Link ke dashboard */}
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* Definisi Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<DashboardProfile />} /> {/* Jalur relatif: /dashboard/profile */}
          <Route path="settings" element={<DashboardSettings />} /> {/* Jalur relatif: /dashboard/settings */}
          <Route index element={<h3>Pilih salah satu menu di atas.</h3>} /> {/* Default child route */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
