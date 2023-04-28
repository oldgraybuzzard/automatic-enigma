import React, { useState } from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import ServiceGallery from './components/ServicesGallery';
import ServiceList from './components/ServiceList';


function App() {
  const [services] = useState([
    {
      name: "Project Management",
      description: "Achieve your project goals with ease and precision through Melken Solutions' proven project management approach."
    },
    {
      name: "Interactive Electronic Technical Manuals (IETM)",
      description: "Upgrade your technical game with IETMs - interactive, intuitive, and instant access to all your technical documentation needs."
    },
    {
      name: "Engineering Support",
      description: "Experience superior performance and cost savings with Melken Solutions' training system design and maintenance."
    },
    {
      name: "Field Engineering Support",
      description: "Solving complex problems on the ground with precision and expertise."
    },
    {
      name: "Integrated Logistics Support (ILS)",
      description: "From planning to implementation, Melken Solutions' integrated logistics support has you covered."
    },
    {
      name: "Training Solutions",
      description: "Maximize your training device ROI with Melken Solutions' tailored training programs."
    },
    {
      name: "Data Entry",
      description: "Maximize your productivity and streamline your operations with Melken Solutions' reliable data entry solutions."
    },
    {
      name: "Information Management",
      description: "Achieve optimal data organization and accessibility with Melken Solutions' expert information management services."
    },
    {
      name: "508 Accessibility",
      description: "Unlock your digital content's full potential with Melken Solutions' inclusive 508 Accessibility services."
    },
    {
      name: "Document Conversion",
      description: "Unlock the full potential of your documents with Melken Solutions' comprehensive conversion solutions."
    },
  ]);

  const [currentService, setCurrentService] = useState(services[0]);

  return (
    <div>
      <Navigation
        services={services}
        setCurrentService={setCurrentService}
        currentService={currentService}
      ></Navigation>
      <main>
        <div>
          <ServiceGallery></ServiceGallery>
          <About></About>
        </div>
      </main> 
    </div>
  );
}

export default App;
