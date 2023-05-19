import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import logo from "../../assets/images/Small.png"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
    <section className="footer">
      <Row>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col className="nav justify-content-center list-unstyled d-flex">
          &copy; {currentYear} Melken Solutions - All Rights Reserved
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
          <ul className="nav justify-content-center list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.linkedin.com/company/melken-solutions-llc/?viewAsMember=true">
                <FaLinkedin />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://github.com/orgs/Melken-Solutions">
                <FaGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
     <br/>
      <Row>
        <Col className="text-center">
         810 Eyrie Drive, Oviedo, FL 32765 | 407.977.5673 | <a href="#privacy" >Privacy Statement</a> | <a href="#terms">Terms of Service</a> | <a href="#returns">Returns & Refund Policy</a>
        </Col>
       </Row>
    </section>
    
  );
}

export default Footer;