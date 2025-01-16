import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Add additional styles

const BestSellers = [
  { id: 1, name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 49.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 19.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 39.99, imageUrl: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to Our Store</h1>
          <p>Your one-stop shop for amazing products!</p>
          <Link to="/store" className="shop-now-btn">Shop Now</Link>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-list">
          {BestSellers.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button className="buy-btn">Buy</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
