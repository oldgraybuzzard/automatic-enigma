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
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
      description: "",
    },
    {
      name: "",
      client: "",
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
    <Container>
      <hr />
      <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">Past Performance</h1>
      <div>
      <Row xs={1} md={2} className="g-4">

      {jobs.map((jobs, i) => (
        <Card text={'dark'} style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title
              className="text-uppercase fw-bold text-decoration-underline" >
                {jobs.name}
            </Card.Title>
            <Card.Text className="mb-2 text-muted">
              {jobs.description}
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <JobToggle eventKey="0">Learn More</JobToggle>
                  <Accordion.Body>
                    {jobs.description}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
      </Row>
    </div>

    </Container>
  );
}

export default PastPerformance;