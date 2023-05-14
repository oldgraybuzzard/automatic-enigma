import React, { useState } from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import ContactUs from './components/Contact';
import ServiceGallery from './components/ServicesGallery';
import ServiceList from './components/ServiceList';

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

  return (
    <div>
      <Navigation
        services={services}
        setCurrentService={setCurrentService}
        currentService={currentService}
        goToService={goToService}
      ></Navigation>
      <main>
        <div>
          <ServiceGallery></ServiceGallery>
          <About></About>
          <ContactUs></ContactUs>
        </div>
      </main> 
    </div>
  );
}

export default App;
