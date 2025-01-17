import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // Import addToCart action
import './LandingPage.css';

const BestSellers = [
  { id: 1, name: 'Radiance Boost Vitamin C Serum', price: 29.99, imageUrl: 'https://i.postimg.cc/kXfWW20v/images-16.jpg' },
  { id: 2, name: 'HydraGlow Deep Moisturizer', price: 49.99, imageUrl: 'https://i.postimg.cc/hjL2nSfZ/images-18.jpg' },
  { id: 3, name: 'Aloe & Green Tea Soothing Gel', price: 19.99, imageUrl: 'https://i.postimg.cc/1X6n2tX4/images-19.jpg' },
  { id: 4, name: 'SPF 50 Mineral Sunscreen', price: 39.99, imageUrl: 'https://i.postimg.cc/DyHp1Ykg/images-20.jpg' },
  // Add more products as needed
];

const LandingPage = () => {
  const dispatch = useDispatch(); // Use dispatch to call Redux actions

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Add product to cart
    alert('Added to Cart!'); // Display a message when item is added
  };

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
              <p>R{product.price}</p>
              <button className="buy-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
