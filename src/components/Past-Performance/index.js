import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function JobToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('service list'),
  );

  return (
    <button
      type='button'
      style={{ backgroundColor: '#6D214F'}}
      onClick={decoratedOnClick}
      >
        {children}
      </button>
  );
}

function PastPerformance() {
  const [jobs] = useState([
    {
      name: "Littoral Combat Ship, Mission Bay Trainer",
      client: "Cubic Defense, Naval Air Warfare Center Training Systems Division",
      description: "",
    },
    {
      name: "PowerPoint Conversion",
      client: "Occupational Safety and Health Administration",
      description: "508 Accessibility Conversion",
    },
    {
      name: "Medical Record Data Entry",
      client: "U.S. Veterans Administration",
      description: "",
    },
    {
      name: "Document Conversion",
      client: "U.S. Department of Justice",
      description: "",
    },
    {
      name: "Document Conversion",
      client: "National Oceanic and Atmospheric Administration",
      description: "",
    },
    {
      name: "Document Conversion",
      client: "Mid-Atlantic Regional Maintenance Center",
      description: "",
    },
    {
      name: "Transit Protection Training System",
      client: "Cubic Defense, Naval Air Warfare Center Training Systems Division",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
  ]);

  const jobsList = jobs.filter;

  return (
    <section className="my-5">
      <hr />
      <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">Proven Capabilities</h1>
      <div>
        <Row xs={1} md={2} className="g-4">
          {jobs.map((jobs, i) => (
          <Card text={'dark'} style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title
                className="text-uppercase fw-bold text-decoration-underline" >
                  {jobs.name}
              </Card.Title>
              <Card.Text 
                className="text-uppercase" >
                  {jobs.client}
              </Card.Text>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <JobToggle eventKey="0">Read More</JobToggle>
                    <Accordion.Body>
                      {jobs.description}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
          </Card>
          ))}
        </Row>
     </div>
    </section>
  );
}

export default PastPerformance;