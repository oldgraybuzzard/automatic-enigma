import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import melkenLogo from '../../assets/images/Small.png';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
      <Container fluid="sm">
        <Navbar.Brand href="/"><img class="logo" src={melkenLogo} alt="Melken Brand Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <NavDropdown title="Government" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#capability-statement">Capability Statement</NavDropdown.Item>
              <NavDropdown.Item href="#contract-vehicles">Contract Vehicles</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#news-events">History</NavDropdown.Item>
              <NavDropdown.Item href="#news-events">News & Events</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;