import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import Auth from './components/Auth';
import UserSpotlightSection from './components/UserSpotlightSection'; // Import spotlight section
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm'; // Import Registration form component
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>

      <Routes>
        <Route path="/" element={<UserSpotlightSection />} />
        <Route path="/store" element={<UserSpotlightSection />} />
        <Route path="/cart" element={null} /> {/* Don't render spotlight section on Cart page */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
