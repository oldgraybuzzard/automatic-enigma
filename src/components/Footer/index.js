import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col className="nav justify-content-center list-unstyled d-flex">
          &copy; {currentYear} Melken Solutions - All Rights Reserved
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ul className="nav justify-content-center list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/company/melken-solutions-llc/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://github.com/orgs/Melken-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="text-center">
          <p>
            Melken Solutions, 810 Eyrie Drive, Oviedo, FL 32765 <br />
            Phone: 407.977.5673 <br />
            <Link to="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Statement
            </Link>{" "}
            |{" "}
            <Link to="/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/returns" target="_blank" rel="noopener noreferrer">
              Returns & Refund Policy
            </Link>
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default Footer;
