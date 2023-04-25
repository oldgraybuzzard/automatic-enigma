import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function ServiceGallery(props) {
  const currentService = {
    name: "Project Management",
    description: "Looking to take your project management to the next level? Look no further than Melken Solutions and our team of certified Project Management Professionals (PMPs). With our proven approach and expertise, we'll help you achieve your project goals with ease and precision, keeping you on time, on budget, and ahead of the competition. From planning to implementation, our PMPs have the skills and experience to ensure your success. So why wait? Contact Melken Solutions today and let us take your project management to the next level.",
  };
  
  return (
    <section>
      <div>
        <h1>The Success of Your Mission Is Our Mission!</h1>
        <p>At Melken Solutions, we strive to provide our clients with the highest quality of services and solutions tailored to meet their unique needs. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding expectations. We take pride in our commitment to innovation, collaboration, and customer satisfaction. With a focus on excellence and continuous improvement, we are dedicated to providing reliable, efficient, and cost-effective solutions to help our clients achieve their goals. To learn more about our services and how we can help your business thrive, <a href="mailto:info@melken-solutions.com?Subject=I have a question about...&body=I visited your website and I would appreciate it if you could return my email. I would love your help with...">Contact Us</a> today.</p>
      </div>
      <Card text={'dark'} style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-uppercase fw-bold text-decoration-underline" >{capitalizeFirstLetter(currentService.name)}</Card.Title>
          <Card.Text className="mb-2 text-muted">
            {currentService.description}
          </Card.Text>
        </Card.Body>
      </Card>
   </section>
  );
}

export default ServiceGallery;