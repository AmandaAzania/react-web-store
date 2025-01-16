import React from 'react';

const HelpSection = () => {
  return (
    <div className="help-section">
      <h2>Shipping Options</h2>
      <p>We offer three types of shipping options for your convenience:</p>
      <ul>
        <li><strong>Standard Shipping</strong> - Delivery within 5-7 business days. Free for orders over $50.</li>
        <li><strong>Express Shipping</strong> - Delivery within 2-3 business days. $10 fee.</li>
        <li><strong>Overnight Shipping</strong> - Delivery the next business day. $20 fee.</li>
      </ul>
      <p>If you have any further questions, please contact our support team.</p>
    </div>
  );
};

export default HelpSection;
