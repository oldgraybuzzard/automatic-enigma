import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


function ServiceList() {
  const [serviceLine] = useState([
    {
      name: 'Project Management',
      description: `Achieve your project goals with ease and precision through Melken Solutions' proven project management approach!`,
    },
        {
      name: 'Interactive Electronic Technical Manuals (IETM)',
      description: 'Upgrade your technical game with IETMs - interactive, intuitive, and instant access to all your technical documentation needs.',
    },
    {
      name: 'Engineering Support',
      description: `Experience superior performance and cost savings with Melken Solutions training system design and maintenance.`,
    },
    {
      name: 'Integrated Logistics Support (ILS)',
      description: `From planning to implementation, Melken Solutions' integrated logistics support has you covered.`,
    },
    {
      name: 'Training Solutions',
      description: `Maximize your training device ROI with Melken Solutions' tailored training programs.`,
    },
    {
      name: '508 Accessibility',
      description: `Unlock your digital content's full potential with Melken Solutions' inclusive 508 Accessibility services.`,
    },
    {
      name: 'Information Management',
      description: `Achieve optimal data organization and accessibility with Melken Solutions' expert information management services.`,
    },
    {
      name: 'Data Entry',
      description: `Maximize your productivity and streamline your operations with Melken Solutions' reliable data entry solutions.`,
    },
  ]);

  const servicePhotos = serviceLine.filter;

  return (
    <div>
      <Row xs={1} md={2} className="g-4">

      {serviceLine.map((service, i) => (
        <Card text={'dark'} style={{ width: '25rem' }}>
          <Card.Img
            src={require(`../../assets/services/${i}.jpg`)}
            alt={service.name}
          />
          <Card.Body>
            <Card.Title
            className="text-uppercase fw-bold text-decoration-underline" >
              {service.name}
          </Card.Title>
          <Card.Text className="mb-2 text-muted">
              {service.description}
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
      </Row>
      
    </div>
  )
}
export default ServiceList;