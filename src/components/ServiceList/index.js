import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { capitalizeFirstLetter } from '../../utils/helpers';

function ServiceToggle({ children, eventKey }) {
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

function ServiceList() {
  const [serviceLine] = useState([
    {
      name: 'Project Management',
      id: 'project-management',
      description: `Achieve your project goals with ease and precision through Melken Solutions' proven project management approach!`,
      detail: `Looking to take your project management to the next level? Look no further than Melken Solutions and our team of certified Project Management Professionals (PMPs). With our proven approach and expertise, we'll help you achieve your project goals with ease and precision, keeping you on time, on budget, and ahead of the competition. From planning to implementation, our PMPs have the skills and experience to ensure your success. So why wait? Contact Melken Solutions today and let us take your project management to the next level`,
    },
        {
      name: 'Interactive Electronic Technical Manuals (IETM)',
      id: 'ietm',
      description: 'Upgrade your technical game with IETMs - interactive, intuitive, and instant access to all your technical documentation needs.',
      detail: `It is a digital manual or technical documentation used by various industries, such as aviation, military, and manufacturing, to provide users with interactive access to technical information. An IETM typically text, graphics, videos, animations, and other multimedia elements that allow users to navigate and understand complex technical information easily. It is designed to be accessed on electronic devices such as computers, tablets, and smartphones, and can be updated and distributed more efficiently than traditional paper-based technical manuals. IETMs have become increasingly popular due to their ease of use, accessibility, and the ability to provide real-time information to users.`,
    },
    {
      name: 'Engineering Support',
      id: 'engineering-support',
      description: `Experience superior performance and cost savings with Melken Solutions training system design and maintenance.`,
      detail: `At Melken Solutions, we understand that logistics engineering is more than just a set of tasks to complete. It's about creating efficient and effective systems that keep your organization moving forward. That's why our team of experts works tirelessly to provide customized solutions that meet your specific needs. From design and development to implementation and ongoing support, we're here to help you streamline your operations, reduce costs, and achieve your goals. With Melken Solutions on your side, you can trust that your logistics engineering needs are in good hands.`,
    },
    {
      name: 'Integrated Logistics Support (ILS)',
      id: 'ils',
      description: `From planning to implementation, Melken Solutions' integrated logistics support has you covered.`,
      detail: ` Maximizing the efficiency and reliability of your operations requires a comprehensive approach to logistics engineering. At Melken Solutions, we provide tailored support to ensure your equipment and systems are optimized for reliability, maintainability, and supportability. From initial planning to ongoing maintenance, we work closely with your team to minimize downtime and keep your operations running smoothly.`,
    },
    {
      name: 'Training Solutions',
      id: 'training-solutions',
      description: `Maximize your training device ROI with Melken Solutions' tailored training programs.`,
      detail: ` At Melken Solutions, we offer tailored training solutions that meet the specific needs of the Department of Defense (DoD). Our team of experienced professionals delivers comprehensive training programs that focus on enhancing the performance, efficiency, and safety of your DoD training devices. We take pride in our ability to design and implement training programs that are effective, efficient, and cost-effective, ensuring that your personnel are fully prepared for any mission. From planning to implementation, we work closely with our clients to ensure that their training needs are met and exceeded. Learn more about our DoD training solutions and how we can help your organization achieve its training objectives.`,
    },
    {
      name: '508 Accessibility',
      id: '508',
      description: `Unlock your digital content's full potential with Melken Solutions' inclusive 508 Accessibility services.`,
      detail: ` Accessibility isn't just about meeting regulations, it's about creating a world that's inclusive to all. At Melken Solutions, we believe that everyone should have equal access to digital content, which is why we offer comprehensive 508 accessibility services. From web design to document conversion, we'll help you unlock the full potential of your content and reach a wider audience. Let us help you create a more accessible and inclusive world, one byte at a time.`,
    },
    {
      name: 'Information Management',
      id: 'information-management',
      description: `Achieve optimal data organization and accessibility with Melken Solutions' expert information management services.`,
      detail: `Managing information effectively is essential for any business. It can mean the difference between success and failure. At Melken Solutions, we understand the importance of information management and we have the expertise to help you achieve your goals. Our team of professionals can provide you with comprehensive information management solutions tailored to your specific needs. We can help you organize your data, streamline your processes, and provide you with the tools you need to make informed decisions. Whether you need help with data analysis, data migration, or data governance, we have the experience and expertise to deliver the results you need. Trust us to help you unlock the full potential of your information and take your business to the next level.`,
    },
    {
      name: 'Data Entry',
      id: 'data-entry',
      description: `Maximize your productivity and streamline your operations with Melken Solutions' reliable data entry solutions.`,
      detail: `At Melken Solutions, we understand that accurate and efficient data entry is essential in the healthcare industry. That's why we offer comprehensive medical data entry services to help healthcare providers streamline their operations and improve patient care. Our experienced team of data entry specialists is trained in medical terminology, coding, and regulations, ensuring that all data is entered correctly and securely. We work closely with our clients to understand their unique needs and tailor our services to provide the best possible solutions. With Melken Solutions, healthcare providers can focus on delivering quality care while we handle their data entry needs.`,
    },
  ]);
  
  return (
    <div>
      <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">
        What We Do
      </h1>
      <hr />
      <Row xs={1} md={2} className="service g-4">
        {serviceLine.map((service, i) => (
          <Card key={i} id={service.id} style={{ width: '20rem' }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/services/${i}.jpg`).default}
              alt={service.name}
            />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
                {service.description}
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <ServiceToggle eventKey="0">Learn More</ServiceToggle>
                    <Accordion.Body>{service.detail}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <hr />
    </div>
  );
}

export default ServiceList;






