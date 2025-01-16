import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // Import the action to add to cart

const StorePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert('Added to Cart!'); // Display a message when item is added
  };

  // Skincare products sample
  const bestSellers = [
    { id: 1, name: 'Hydrating Facial Cleanser', price: '$25.00', image: '/images/product1.jpg' },
    { id: 2, name: 'Anti-Aging Serum', price: '$35.00', image: '/images/product2.jpg' },
    { id: 3, name: 'Nourishing Body Lotion', price: '$18.00', image: '/images/product3.jpg' },
    { id: 4, name: 'Moisturizing Night Cream', price: '$40.00', image: '/images/product4.jpg' },
    { id: 5, name: 'SPF 50 Sunscreen', price: '$22.00', image: '/images/product5.jpg' },
    { id: 6, name: 'Vitamin C Serum', price: '$30.00', image: '/images/product6.jpg' },
    { id: 7, name: 'Refreshing Face Mist', price: '$15.00', image: '/images/product7.jpg' },
    { id: 8, name: 'Brightening Eye Cream', price: '$28.00', image: 'https://i.postimg.cc/G2PMT64N/Retinol-Serum.png' },
    { id: 9, name: 'Exfoliating Scrub', price: '$20.00', image: 'https://i.postimg.cc/G2PMT64N/Retinol-Serum.png' },
    { id: 10, name: 'Soothing Lip Balm', price: '$12.00', image: 'https://i.postimg.cc/G2PMT64N/Retinol-Serum.png' }
  ];

  return (
    <div className="store-page">
      <h2>Best Sellers</h2>
      <div className="product-list">
        {bestSellers.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
