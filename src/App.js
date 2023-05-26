import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './components/Nav';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import WhyUs from './components/WhyUs';
import ServiceList from './components/ServiceList';
import PastPerformance from './components/Past-Performance';
import Certification from './components/Certifications';
import Capability from './components/Capability-Statement';
import Footer from './components/Footer';
import CookieConsent from './components/Cookie-Consent';
import PrivacyStatement from './components/PrivacyStatement';
import TermsOfService from './components/TermsOfService';
import ReturnsRefundPolicy from './components/ReturnsRefundPolicy';
// import EmployeePage from './components/EmployeeArea';

function PageTitle({ location }) {
  const getPageTitle = (path) => {
    // Map the path to the corresponding page title
    if (path === '/') return 'Home';
    if (path === '/#project-management') return 'Project Management';
    if (path === '/#ietm') return 'IETM';
    if (path === '/#engineering-support') return 'Engineering Support';
    if (path === '/#ils') return 'Integrated Logistics Support';
    if (path === '/#training-solutions') return 'Training Solutions';
    if (path === '/#508') return '508 Accessibility';
    if (path === '/#information-management') return 'Information Management';
    if (path === '/#data-entry') return 'Data Entry';
    if (path === '/#capability') return 'Capability Statement';
    if (path === '/#contract-vehicles') return 'Contract Vehicles';
    if (path === '/#history') return 'History';
    if (path === '/#certifications') return 'Certifications';
    if (path === '/contact') return 'Contact Us';
    // Add other mappings as needed
    // Default title for unknown paths
    return 'Page Not Found';
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <Helmet>
      <title>Melken Solutions :: {pageTitle}</title>
    </Helmet>
  );
}

function App() {
  const [showPrivacy, setShowPrivacy] = useState(true);

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<a href="/employee" target="_blank" rel="noopener noreferrer">Employee Page</a>} />
          <Route path="/#project-management" element={<ServiceList />} />
          <Route path="/privacy" element={showPrivacy && <PrivacyStatement onClose={handleClosePrivacy} />} />
          <Route path="/terms" element={showPrivacy && <TermsOfService onClose={handleClosePrivacy} />} />
          <Route path="/returns" element={showPrivacy && <ReturnsRefundPolicy onClose={handleClosePrivacy} />} />
          <Route
            path="/*"
            element={<PageTitle location={window.location} />}
          />
        </Routes>
        <main>
          <div>
            <CookieConsent />
            <WhyUs />
            <ServiceList />
            <PastPerformance />
            <Certification />
            <Capability />
            <About />
            <ContactForm />
            <Footer />
          </div>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
