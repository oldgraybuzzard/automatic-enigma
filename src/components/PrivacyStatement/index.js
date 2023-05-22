import React from "react";

function PrivacyStatement({ onClose }) {
  return (
    <div id="privacy-statement">
      <h2>Privacy Statement</h2>
      <p>
        At Melken Solutions, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Statement explains how we collect, use, disclose, and protect your information when you visit our website or use our services. By accessing or using our website and services, you consent to the practices described in this Privacy Statement.
      </p>
      <h3>1. Information We Collect</h3>
      <p>
        When you interact with our website or use our services, we may collect certain information from you, including:
      </p>
      <ul>
        <li>Personal information such as your name, email address, phone number, and any other information you voluntarily provide to us.</li>
        <li>Usage information such as your IP address, browser type, operating system, and other technical details.</li>
        <li>Cookies and similar technologies to track your interactions with our website and personalize your experience.</li>
      </ul>
      <h3>2. How We Use Your Information</h3>
      <p>
        We may use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>Providing and improving our services to meet your needs.</li>
        <li>Communicating with you about updates, offers, and promotions.</li>
        <li>Analyzing website usage and trends to enhance our website's performance and user experience.</li>
        <li>Protecting our rights, property, and safety, as well as the rights, property, and safety of our users and others.</li>
      </ul>
      <h3>3. Information Disclosure</h3>
      <p>
        We may share your information with third parties in the following circumstances:
      </p>
      <ul>
        <li>With your consent or at your direction.</li>
        <li>With service providers, business partners, or contractors who assist us in operating our website and providing our services.</li>
        <li>In response to a legal request, such as a court order or government inquiry.</li>
        <li>To protect our rights, property, or safety, or the rights, property, or safety of others.</li>
      </ul>
      <h3>4. Data Security</h3>
      <p>
        We implement security measures to protect your information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
      <h3>5. Your Choices and Rights</h3>
      <p>
        You have certain choices and rights regarding your personal information, including the right to access, correct, or delete your information. You can contact us using the information provided below to exercise these rights.
      </p>
      <h3>6. Updates to this Privacy Statement</h3>
      <p>
        We may update this Privacy Statement from time to time to reflect changes in our practices or applicable laws. The updated version will be posted on our website, and your continued use of our services after the changes signifies your acceptance of the updated Privacy Statement.
      </p>
      <h3>7. Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Statement or our privacy practices, please contact us at:
      </p>
      <p>
        Melken Solutions<br />
        810 Eyrie Drive, Oviedo, FL 32765<br />
        Phone: 407.977.5673<br />
        Email: <a href="mailto:info@melken-solutions.com">Email Us</a>
      </p>
      <button onClick={onClose}>Close</button>
      <hr />
    </div>
  )
};

export default PrivacyStatement;