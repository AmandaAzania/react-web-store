import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart, removeProduct } from '../redux/actions'; 

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  // Set initial shipping method as standard
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Handle changing shipping method
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  // Handle removing or decreasing product quantity
  const handleRemoveOrDecrease = (product) => {
    if (product.quantity === 1) {
      dispatch(removeFromCart(product.id)); 
    } else {
      dispatch(removeProduct(product.id)); 
    }
  };

  // Handle increasing product quantity
  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product)); 
  };

  // Calculate the total price of products in the cart
  const totalPrice = cart.reduce((total, product) => total + (parseFloat(product.price.replace('$', '')) * product.quantity), 0).toFixed(2);

  // Shipping costs based on the selected method
  const shippingCost = shippingMethod === 'standard' ? 5.99 : shippingMethod === 'express' ? 9.99 : 14.99;

  // Final total calculation (product total + shipping cost)
  const finalTotal = (parseFloat(totalPrice) + shippingCost).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      
      {/* Display Cart Items */}
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="item-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleRemoveOrDecrease(product)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(product)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Method Dropdown */}
      <div className="shipping-method">
        <label>Shipping Method</label>
        <select value={shippingMethod} onChange={handleShippingChange}>
          <option value="standard">Standard Shipping ($5.99)</option>
          <option value="express">Express Shipping ($9.99)</option>
          <option value="overnight">Overnight Shipping ($14.99)</option>
        </select>
      </div>

      {/* Total Price */}
      <div className="total-price">
        <h3>Total: ${totalPrice}</h3>
        <h3>Shipping: ${shippingCost}</h3>
        <h3 className="final-total">Final Total: ${finalTotal}</h3>
      </div>
    </div>
  );
};

export default CartPage;
