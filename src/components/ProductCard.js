
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="buy-button" onClick={() => addToCart(product)}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
