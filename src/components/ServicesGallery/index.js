import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { capitalizeFirstLetter } from "../../utils/helpers";
import "../../carousel.css";
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';

function ServiceGallery(currentService) {
  const { name, description } = currentService;


  return (
    <section className="hero">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          {capitalizeFirstLetter}<h3>Identifying problems.</h3>
          {capitalizeFirstLetter}<p>Delivering Innovative Solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Third slide"
        />

        <Carousel.Caption>
          {capitalizeFirstLetter}<h3>Assisting Our Clients with State-of-the-Art Solutions.</h3>
          {capitalizeFirstLetter}<p>From High-Tech Simulators to Realistic Training Environments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {capitalizeFirstLetter}<h3>Unlocking Efficiency and Enhancing Accessibility with Interactive Electronic Technical Manuals (IETMs)</h3>
          {capitalizeFirstLetter}<p>Delivering Interactive and Intuitive Technical Documentation Solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero4}
          alt="Third slide"
        />

        <Carousel.Caption>
          {capitalizeFirstLetter}<h3>Streamline Your Projects with Expert Management.</h3>
          {capitalizeFirstLetter}<p>Efficiently Delivering Success, Every Step of the Way.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>      
      
  <Row>
    <Col>
      <h1>The Success of Your Mission Is Our Mission!</h1>
     </Col>
    <Col>
      <p>At Melken Solutions, we strive to provide our clients with the highest quality of services and solutions tailored to meet their unique needs. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding expectations. We take pride in our commitment to innovation, collaboration, and customer satisfaction. With a focus on excellence and continuous improvement, we are dedicated to providing reliable, efficient, and cost-effective solutions to help our clients achieve their goals.</p>
    </Col>
  </Row>
  <Row>
    <p className="text-center lead"><u>To learn more about our services and how we can help your business thrive, <a href="mailto:info@melken-solutions.com?Subject=I have a question about...&body=I visited your website and I would appreciate it if you could return my email. I would love your help with...">Contact Us</a> today.</u></p>
  </Row>
 </section>
  );
}

export default ServiceGallery;