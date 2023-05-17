import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../carousel.css";
import { FaCheck } from 'react-icons/fa';
import { IconContext } from "react-icons";
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';

function ServiceGallery(currentService) {
  const { name, description } = currentService;


  return (
    <section className="hero">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
           <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
           <img className="carousel-image" src={hero1}/>
            <div className="container">
              <div className="carousel-caption text-start">
                <div className="carousel-text">
                <h1>Identifying Problems.</h1>
                <p>Delivering Innovative Solutions.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="carousel-item">
          <img className="carousel-image" src={hero2}/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Assisting our clients with State-of-the-Art Solutions</h1>
              <p>From High-Tech Simulators to Realistic Training Environments.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="carousel-image" src={hero3}/>
           <div className="container">
            <div className="carousel-caption text-end">
              <h1>Unlocking Efficiency and Enhancing Accessibility with Interactive Electronic Technical Manuals (IETMs)</h1>
              <p>Delivering Interactive and Intuitive Technical Documentation Solutions.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="carousel-image" src={hero4}/>
           <div className="container">
            <div className="carousel-caption text-end">
              <h1>Streamline Your Projects with Expert Management.</h1>
              <p>Efficiently Delivering Success, Every Step of the Way.</p>
            </div>
          </div>
        </div>
        
      </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <Row>
    <Col>
      <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">The Success of Your Mission Is Our Mission!</h1>
      <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: '4rem', style: {verticalAlign: 'middle'} }}>
        <div>
          <FaCheck/>
        </div>
      </IconContext.Provider>
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