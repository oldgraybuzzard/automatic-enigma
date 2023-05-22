import React from "react";

function ReturnsRefundPolicy({ onClose }) {
  return (
    <div id="returns-refund-policy">
      <h1>Refund Policy</h1>
      <p>Thank you for choosing Melken Solutions, LLC. We strive to provide excellent service, and if you are not completely satisfied, we are here to assist you. This Return and Refund Policy applies to melken-solutions.com.</p>

      <h2>Returns</h2>
      <p>As Melken Solutions offers non-tangible irrevocable document scanning and conversion services, we do not issue returns once the service has been rendered. It is your responsibility as a customer to understand this before conducting business with Melken Solutions. However, we understand that exceptional circumstances may arise regarding the services provided. In such cases, you have 1 year from the date of service to request corrections for any deficiencies in the services rendered.</p>

      <h2>Refunds</h2>
      <p>If you are not completely satisfied with our service, please contact us promptly. Refunds may be requested for documents that were scanned in poor quality. If we are unable to successfully resolve your issue within 60 days from your initial contact, we will gladly refund you for any documents that we were unable to convert successfully.</p>

      <h2>Shipping</h2>
      <p>You are responsible for the shipping costs associated with returning your item. Please note that shipping costs are non-refundable. If a refund is issued, the cost of return shipping will be deducted from the total refund amount.</p>

      <h2>Changes to this Policy</h2>
      <p>Melken may occasionally update this Return and Refund Policy to reflect feedback from our company and customers. We encourage you to review this statement periodically to stay informed about how Melken is protecting your information.</p>

      <h2>Contact Information</h2>
      <p>We welcome your questions or comments regarding this Return and Refund Policy. If you believe that Melken has not adhered to this policy, please contact us at:</p>
     <p>Melken Solutions<br />
        810 Eyrie Drive, Oviedo, FL 32765<br />
        Phone: 407.977.5673<br />
        Email: <a href="mailto:info@melken-solutions.com">Email Us</a>
      </p>
      <button onClick={onClose}>Close</button>
      <hr />
    </div>
  )
};

export default ReturnsRefundPolicy;