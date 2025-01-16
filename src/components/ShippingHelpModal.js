import React, { useState } from 'react';

const ShippingHelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleModal}>Help with Shipping</button>
      
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Shipping Options</h2>
            <p><strong>Standard Shipping:</strong> 5-7 business days</p>
            <p><strong>Express Shipping:</strong> 2-3 business days</p>
            <p><strong>Overnight Shipping:</strong> Next-day delivery</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShippingHelpModal;
