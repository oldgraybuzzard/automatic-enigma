import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

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
  ]);

  // const jobsList = jobs.filter;

  return (
    <section className="my-5">
      <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Proven Capabilities</h1>
      <hr />
        <Row xs={1} md={2} className="g-4">
          {jobs.map((jobs, i) => (
          <Card key={i} text={'dark'} style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title
                className="text-uppercase fw-bold text-decoration-underline" >
                  {jobs.name}
              </Card.Title>
              <Card.Text 
                className="text-uppercase" >
                  {jobs.client}
              </Card.Text>
              <Card.Text>
                <a href="mailto:info@melken-solutions.com?Subject=I have a question about...&body=I visited your website and I am looking at Past Performance. I would love to learn more about one of the projects listed. I would appreciate it if you could return my email.">Contact us</a> to learn more about involvement with this effort!
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
        </Row>
    </section>
  );
}

export default PastPerformance;