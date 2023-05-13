import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ServiceList from "../ServiceList";

function ServiceGallery(currentService) {
  const { name, description } = currentService;


  return (
    <section>
      <div>
        <h1>The Success of Your Mission Is Our Mission!</h1>
        <p>At Melken Solutions, we strive to provide our clients with the highest quality of services and solutions tailored to meet their unique needs. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding expectations. We take pride in our commitment to innovation, collaboration, and customer satisfaction. With a focus on excellence and continuous improvement, we are dedicated to providing reliable, efficient, and cost-effective solutions to help our clients achieve their goals. To learn more about our services and how we can help your business thrive, <a href="mailto:info@melken-solutions.com?Subject=I have a question about...&body=I visited your website and I would appreciate it if you could return my email. I would love your help with...">Contact Us</a> today.</p>
      </div>
      <ServiceList />

   </section>
  );
}

export default ServiceGallery;