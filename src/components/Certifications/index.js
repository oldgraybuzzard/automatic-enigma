import React from "react";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import sdvosb from '../../assets/images/sdvosb.jpg';
import iso from '../../assets/images/ISO 9001.png'

function Certification() {
return (
  <section id="certifications">
    <Row>
      <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Certifications</h1>
      <hr/>
    </Row>
    <Row className="justify-content-md-center">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={sdvosb} />
      </Card>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={iso} />
      </Card>
    </Row>
  </section>

 );
}

export default Certification;
