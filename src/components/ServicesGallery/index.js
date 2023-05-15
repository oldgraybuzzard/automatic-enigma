import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./ImageCarousel.css";
import "../../carousel.css";
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
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={hero1}/>
         <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={hero2}/>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={hero3}/>
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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
        <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">The Success of Your Mission Is Our Mission!</h1>
        <p>At Melken Solutions, we strive to provide our clients with the highest quality of services and solutions tailored to meet their unique needs. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding expectations. We take pride in our commitment to innovation, collaboration, and customer satisfaction. With a focus on excellence and continuous improvement, we are dedicated to providing reliable, efficient, and cost-effective solutions to help our clients achieve their goals. To learn more about our services and how we can help your business thrive, <a href="mailto:info@melken-solutions.com?Subject=I have a question about...&body=I visited your website and I would appreciate it if you could return my email. I would love your help with...">Contact Us</a> today.</p>
      
    </section>
  );
}

export default ServiceGallery;