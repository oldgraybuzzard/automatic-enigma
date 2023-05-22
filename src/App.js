import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Nav';
import About from './components/About';
import ContactForm from './components/ContactForm';
import ServiceGallery from './components/ServicesGallery';
import ServiceList from './components/ServiceList';
import PastPerformance from './components/Past-Performance';
import Certification from './components/Certifications';
import Capability from './components/Capability-Statement';
import Footer from './components/Footer';
import CookieConsent from './components/Cookie-Consent';
import PrivacyStatement from './components/PrivacyStatement';
// import TermsOfService from './components/TermsOfService';
// import ReturnsRefundPolicy from './components/ReturnsRefundPolicy';

function App() {
  const [services] = useState([
    {
      name: "Project Management",
      id: "#projectManagement"
    },
    {
      name: "Interactive Electronic Technical Manuals (IETM)",
      id: "#ietm"
    },
    {
      name: "Engineering Support",
      id: "#engineeringSupport"
    },
    {
      name: "Integrated Logistics Support (ILS)",
      id: "#ils"
    },
    {
      name: "Training Solutions",
      id: "#trainingSolutions"
    },
    {
      name: "508 Accessibility",
      id: "#508"
    },
    {
      name: "Information Management",
      id: "#informationManagement"
    },
    {
      name: "Data Entry",
      id: "#dataEntry"
    },
  ]);

  const [currentService, setCurrentService, goToService] = useState(services[0]);

  const [showPrivacy, setShowPrivacy] = useState(true);

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
        
  };

  return (
    <Router>
      <div>
        <Navigation
          services={services}
          setCurrentService={setCurrentService}
          currentService={currentService}
          goToService={goToService}
        />
        <Routes>
            <Route path="/privacy" element={showPrivacy && <PrivacyStatement onClose={handleClosePrivacy}/>} />
            {/* Define more routes as needed */}
        </Routes>
        <main>
          <div>
            <CookieConsent />
            <ServiceGallery />
            <ServiceList />
            <About />
            <PastPerformance />
            <Certification />
            <Capability />
            <ContactForm />
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;