import React from "react";
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { capitalizeFirstLetter } from "../../utils/helpers";
import "../../carousel.css";
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';

function Home() {
  return (
    <section className="hero">
      <Row>
      <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">{capitalizeFirstLetter('The Success of Your Mission Is Our Mission!')}</h1>
      </Row>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="Blackbaord with the word Problem and Solution"
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
          alt="Military vessel at sea"
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
          alt="HTML code"
        />

      <Carousel.Caption>
        <h3>{capitalizeFirstLetter('Unlocking Efficiency and Enhancing Accessibility with Interactive Electronic Technical Manuals (IETMs)')}</h3>
        <p>{capitalizeFirstLetter('Delivering Interactive and Intuitive Technical Documentation Solutions.')}</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero4}
          alt="Chessboard with pieces"
        />

      <Carousel.Caption>
        <h3>{capitalizeFirstLetter('Streamline Your Projects with Expert Management.')}</h3>
        <p>{capitalizeFirstLetter('Efficiently Delivering Success, Every Step of the Way.')}</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>      
  );
}

export default Home;