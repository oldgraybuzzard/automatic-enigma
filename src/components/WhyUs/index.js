import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { capitalizeFirstLetter } from "../../utils/helpers";
import Popover from 'react-bootstrap/Popover';

import collaborating from '../../assets/images/whyus-team.jpg';

const WhyUs = () => {
  const whyUsList = [
    {
      why: 'Expertise',
      reason: 'At Melken Solutions, we bring together a team of industry experts to deliver exceptional services. Our team comprises logistics experts, technical writers, full-stack web developers, electrical engineering technicians, document conversion experts, and certified project managers. With their diverse skill set and extensive experience, we ensure that every project is managed efficiently and effectively, meeting the highest standards of quality and professionalism.',
    },
    {
      why: 'Quality',
      reason: `We are proud to be an ISO 9001:2015 certified company, demonstrating our unwavering commitment to delivering top-quality services that meet the highest industry standards. Our rigorous adherence to the ISO 9001:2015 quality management system ensures that every aspect of our operations is focused on attention to detail, dedication to excellence, and continuous improvement. This commitment translates into reliable and robust solutions for our customers, providing them with the confidence and assurance they need for their projects' success.`,
    },
    {
      why: 'Customer Satisfaction',
      reason: `Our customers' satisfaction is our utmost priority. We strive to understand their unique needs and provide tailored solutions that address their specific requirements. We value long-term relationships with our clients and are always ready to go the extra mile to exceed their expectations.`,
    },
    {
      why: 'Innovation',
      reason: 'At Melken Solutions, innovation is at the core of our approach. We have a relentless passion for exploring new possibilities and constantly improving our services. By staying abreast of the latest industry trends and technologies, we ensure that we are always equipped to offer cutting-edge solutions that propel business growth and drive success. Our commitment to innovation enables us to push boundaries, challenge conventional thinking, and deliver transformative outcomes for our clients. With Melken Solutions, you can expect forward-thinking strategies and a dynamic mindset that brings fresh perspectives to every project we undertake.',
    },
    {
      why: 'Timely Delivery',
      reason: `Our team is driven by our mission: the success of your mission. We believe in providing comprehensive support throughout the project lifecycle and beyond. We prioritize responsiveness to our clients' needs and ensure that we are always available to address any concerns or provide assistance. Your success is our ultimate goal, and we are dedicated to going the extra mile to help you achieve it. With our unwavering commitment to your mission and our responsive approach, you can rely on us as a trusted partner every step of the way.`,
    },
    {
      why: 'Exceptional Support',
      reason: `At Melken Solutions, our team is committed to providing unparalleled support throughout the entire project lifecycle and beyond. We understand the importance of responsiveness and being there for our clients every step of the way. Whether you have questions, concerns, or require assistance, our dedicated team is always available to provide prompt and reliable support. We pride ourselves on our ability to listen to our clients, understand their unique needs, and tailor our services to exceed their expectations. With Melken Solutions, you can rest assured knowing that you have a trusted partner by your side, ready to provide the comprehensive support you need to achieve your goals.`,
    },
  ];

  return (
    <section>
      <Row>
        <Col>
          <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">{capitalizeFirstLetter('Why Choose Melken Solutions?')}</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs lg="6">
          <Image fluid src={collaborating} alt="Why Choose Melken Solutions" />
        </Col>
        <Col xs lg="6">
          <p>At Melken Solutions, we pride ourselves on delivering exceptional services and providing value to our customers. Here are some reasons why you should choose us:</p>
          {whyUsList.map((item, index) => (
            <OverlayTrigger key={index} trigger="click" placement="left" overlay={
              <Popover id={`popover-${index}`} className="whyus-popover">
              <Popover.Header as="h3">{item.why}</Popover.Header>
              <Popover.Body>{item.reason}</Popover.Body>
            </Popover>}>
              <div className="d-grid gap-2">
                <Button className="popover-button" variant="warning" size="lg">{item.why}</Button>
              </div>
            </OverlayTrigger>
          ))}
          <p>
            Choose Melken Solutions for reliable, high-quality, and innovative services that drive your business forward. <a href="mailto:info@melken-solutions.com">Contact us</a> today or call us at 407-977-5673 to discuss your requirements and let us help you achieve your goals.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default WhyUs;
