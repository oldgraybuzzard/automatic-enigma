import React from "react";
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import coverImage from "../../assets/cover/teamwork-cover.png";

function About() {
  return (
    <section className="my-5">
      
      <Container>
        <Row>
          <Col xs={6}>
            <Figure>
              <Figure.Image
                width={220}
                height={260}
                alt="Cog with images of people"
                src={coverImage}
              />
            </Figure>        
          </Col>
          <Col>
            <h1 id="about">Discover Who We Are</h1>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

export default About;
