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
          <span className="mb-3 mb-md-0 text-body-secondary">&copy; {currentYear}</span>
        </Col>
        <Col>
          <a href="/" className="mb-3 me-2 mb-md-0"><Image src={logo} /></a>
        </Col>
        <Col>
          <ul className="nav justify-content-end list-unstyled d-flex">
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
    </section>
    
  );
}

export default Footer;