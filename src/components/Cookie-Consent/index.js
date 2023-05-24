import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieConsent', 'accepted');
    window.location.reload();
  };

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent === 'accepted') {
      setAccepted(true);
    }
  }, []);

  if (accepted) {
    return null;
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent">
        <p>
          We use cookies to analyze the performance of traffic on our website and provide content personalization. By clicking "I Accept," you consent to the use of cookies.{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>{" "}
          about how we use cookies in our Privacy Statement.
        </p>
        <button onClick={handleAccept}>I Accept</button>
        <button onClick={() => setAccepted(true)}>Dismiss</button>
      </div>
    </div>
  );
};

export default CookieConsent;
