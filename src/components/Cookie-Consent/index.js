import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent === 'accepted') {
      setAccepted(true);
    }
  }, []);

  useEffect(() => {
    if (accepted) {
      localStorage.setItem('cookieConsent', 'accepted');
    }
  }, [accepted]);

  if (accepted) {
    return null;
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent">
        <p>
          We use cookies to analyze performance of the traffic on our website and provide content personalization. By clicking "I Accept," you consent to use of cookies in accordance with our Privacy Statement.
        </p>
        <button onClick={handleAccept}>I Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
