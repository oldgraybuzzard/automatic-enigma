import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import melkenLogo from '../../assets/images/Small.png';

function Navigation() {
  const [services] = useState([
    {
      name: 'Project Management',
      id: '#project-management'
    },
    {
      name: 'Interactive Electronic Technical Manuals (IETM)',
      id: '#ietm'
    },
    {
      name: 'Engineering Support',
      id: '#engineering-support'
    },
    {
      name: 'Integrated Logistics Support (ILS)',
      id: '#ils'
    },
    {
      name: 'Training Solutions',
      id: '#training-solutions'
    },
    {
      name: '508 Accessibility',
      id: '#508'
    },
    {
      name: 'Information Management',
      id: '#information-management'
    },
    {
      name: 'Data Entry',
      id: '#data-entry'
    },
  ]);

  const [currentService, setCurrentService] = useState(services[0]);

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" sticky="top">
      <Container fluid="sm">
        <Navbar.Brand href="/">
          <img className="logo" src={melkenLogo} alt="Melken Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services">
              {services.map((service) => (
                <NavDropdown.Item
                  href={service.id}
                  className={`mx-1 ${currentService.name === service.name ? 'navActive' : ''}`}
                  key={service.name}
                  onClick={() => setCurrentService(service)}
                >
                  {capitalizeFirstLetter(service.name)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Government">
              <NavDropdown.Item href="#capability">Capability Statement</NavDropdown.Item>
              <NavDropdown.Item href="#contract-vehicles">Contract Vehicles</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About">
              <NavDropdown.Item href="#history">History</NavDropdown.Item>
              <NavDropdown.Item href="#certifications">Certifications</NavDropdown.Item>
              <NavDropdown.Item href="#contactUs">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
