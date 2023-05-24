import React from "react";
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage from "../../assets/images/discover.png";
import compass from "../../assets/images/history.png";
import man1 from "../../assets/images/man-1.png";
import man2 from "../../assets/images/man-2.png";
import fit from "../../assets/images/fitthepieces.jpg";
import colloboration from "../../assets/images/colloboration.png";
import best from "../../assets/images/leader.jpg";

function About() {
  return (
    <section className="my-5">
      <section>
        <Container id="history">
          <Row className="justify-content-md-center">
            <Col>
              <Figure>
                <Figure.Image
                width={171}
                height={180}
                alt="People sitting around a table collaborating"
                src={aboutImage}
                roundedCircle
                />
              </Figure>
            </Col>
            <Col xs={8}> 
              <h1 className="text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-3">Discover Who We Are</h1>
              <hr />
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                width={171}
                height={180}
                alt="People sitting around a table collaborating"
                src={aboutImage}
                roundedCircle
                />
            </Figure>
            </Col> 
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <Image id="about-image" src={compass} rounded />
            </Col>
            <Col>
              <div className="title-block">
                <h2 className="text-end">Who Are We</h2>
                <h1 className="text-end mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">Our Story</h1>
                <hr></hr>
                <p className="mbr-text mbr-fonts-style mbr-gray mbr-pt-3 display-7">
                  Melken is a Minority, Service Disabled Veteran Owned Small Business founded in 2008. 
                  <br></br>
                  <br></br>
                  Since our beginning weve been successfully serving the U.S. Federal Government, and commercial customers, throughout the United States and its territories.
                  <br></br>
                  <br></br>
                  Melken has provided information management solutions for multiple federal, state, and local agencies, medical offices, legal offices, Department of Defense (DoD) commercial contractors and vendors as well as various other firms from diverse industries. 
                  <br></br>
                </p>
             </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container fluid className="my-5">
          <Row>
          <Col sm={8}>
            <Row>
              <h2>Growing With our Clients</h2>
              <h1 className="mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4">A Wealth Of Experience Gained Over 14 Years</h1>
              <hr/>              
            </Row>
            <Row>
              <Card style={{ width: '17rem'}}>
                  <Card.Body>
                  <Card.Img variant="top" src={man2} />
                  <Card.Text>
                    It is our goal to provide our customers with proven, cost-effective, stress-free, solutions. We are thoroughly experienced in all aspects of helping organizations manage their information and produce documentation that helps their customers.
                    </Card.Text>
                    <Card.Text>
                    We pride ourselves on our ability to provide services that satisfy the exclusive expectations, needs, and requirements of our valued customers.
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '17rem'}}>
                  <Card.Body>
                  <Card.Img variant="top" src={fit} />
                  <Card.Text>
                    We have developed an approach with a competitive advantage, to ensure that it is superior and cannot be easily reproduced by others. We separate ourselves from our competitors by strictly avoiding “cookie cutter” procedures and methods.
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '17rem'}}>
                  <Card.Body>
                  <Card.Img variant="top" src={colloboration} />
                  <Card.Text>
                      We insist on developing a close relationship with our valued customers because this is essential in order to properly and completely ensure that their wants and needs are met. This is the reputation we strive to maintain and uphold.
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '17rem'}}>
                  <Card.Body>
                  <Card.Img variant="top" src={best} />
                  <Card.Text>
                    We strive to be the best in our field regardless of the pedigree, tenure or inclinations of our competitors.  It is also our goal to be the finest service of its kind in the eyes of our valued customers as judged not only by the quality of our service, but also by understanding, friendship, integrity and value.
                  </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col sm={4}>
             <Image src={man1} rounded />
            </Col>             
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default About;
