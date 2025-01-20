import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // Import the action to add to cart

const StorePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Convert price from string (e.g., 'R25.00') to number (e.g., 25.00)
    const price = parseFloat(product.price.replace('R', '').replace(',', '')); 
    
    const productWithPrice = { ...product, price }; // Create a new product object with the updated price
    dispatch(addToCart(productWithPrice)); // Dispatch the product with the price as a number
    alert('Added to Cart!'); // Display a message when item is added
  };

  // Skincare products 
  const bestSellers = [
    { id: 1, name: 'Hydrating Facial Cleanser', price: 'R25.00', image: 'https://i.postimg.cc/J4Hr267G/Cera-Ve-Hydrating-Facial-Cleanser-88ml.jpg' },
    { id: 2, name: 'Anti-Aging Serum', price: 'R35.00', image: 'https://i.postimg.cc/yxjZr7m4/SECRET-ANTI-AGE-FACIAL-SERUM-scaled.jpg' },
    { id: 3, name: 'Nourishing Body Lotion', price: 'R18.00', image: 'https://i.postimg.cc/s2DBNkn5/images-6.jpg' },
    { id: 4, name: 'Moisturizing Night Cream', price: 'R40.00', image: 'https://i.postimg.cc/5yHLkh2s/images-7.jpg' },
    { id: 5, name: 'SPF 50 Sunscreen', price: 'R22.00', image: 'https://i.postimg.cc/SQJg5sjN/images-9.jpg' },
    { id: 6, name: 'Vitamin C Serum', price: 'R30.00', image: 'https://i.postimg.cc/JhCw7XDq/images-10.jpg' },
    { id: 7, name: 'Refreshing Face Mist', price: 'R15.00', image: 'https://i.postimg.cc/wBB6YJSG/5056183602857.jpg' },
    { id: 8, name: 'Brightening Eye Cream', price: 'R28.00', image: 'https://i.postimg.cc/tCyJm1CL/enlighten-brighten-eye-cream-1.jpg' },
    { id: 9, name: 'Exfoliating Scrub', price: 'R20.00', image: 'https://i.postimg.cc/sDW343rv/images-11.jpg' },
    { id: 10, name: 'Soothing Lip Balm', price: 'R12.00', image: 'https://i.postimg.cc/Jn7bjTHz/images-12.jpg' }
  ];

  return (
    <div className="store-page">
      <h2>Best Sellers</h2>
      <div className="product-list">
        {bestSellers.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {/* Display price with "R" symbol */}
            <p>{`R${product.price.replace('R', '')}`}</p> 
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
