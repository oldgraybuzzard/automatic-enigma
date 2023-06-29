import React from "react";
import Row from 'react-bootstrap/Row';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { capitalizeFirstLetter } from "../../utils/helpers";
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';

function Home() {
  return (
    <section className="hero">
      <Row>
      {/* <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">{capitalizeFirstLetter('The Success of Your Mission Is Our Mission!')}</h1> */}
      </Row>
    <MDBCarousel showControls showIndicators dealy={8000}>
      <MDBCarouselItem
          className="d-block w-100 carouselImage"
          itemId={1}
          src={hero1}
          alt="Blackbaord with the word Problem and Solution"
      >
          {capitalizeFirstLetter}<h3>Identifying problems.</h3>
          {capitalizeFirstLetter}<p>Delivering Innovative Solutions.</p>
      </MDBCarouselItem>
      
      <MDBCarouselItem
          className="d-block w-100 carouselImage"
          itemId={2}
          src={hero2}
          alt="Military vessel at sea"
      >
          {capitalizeFirstLetter}<h3>Assisting Our Clients with State-of-the-Art Solutions.</h3>
          {capitalizeFirstLetter}<p>From High-Tech Simulators to Realistic Training Environments.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
          className="d-block w-100 carouselImage"
          itemId={3}
          src={hero3}
          alt="HTML code"
      >
        <h3>{capitalizeFirstLetter('Unlocking Efficiency and Enhancing Accessibility with Interactive Electronic Technical Manuals (IETMs)')}</h3>
        <p>{capitalizeFirstLetter('Delivering Interactive and Intuitive Technical Documentation Solutions.')}</p>
      </MDBCarouselItem>
      <MDBCarouselItem
          className="d-block w-100 carouselImage"
          itemId={4}
          src={hero4}
          alt="Chessboard with pieces"
      >
        <h3>{capitalizeFirstLetter('Streamline Your Projects with Expert Management.')}</h3>
      </MDBCarouselItem>
    </MDBCarousel>
  </section>      
  );
}

export default Home;