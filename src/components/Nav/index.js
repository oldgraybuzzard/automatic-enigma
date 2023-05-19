import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import melkenLogo from '../../assets/images/Small.png';

function Navigation(props) {
  const {
    services = [],
    setCurrentService,
    currentService,
    goToService,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentService.name);
  }, [currentService, goToService]);

  return (
    <Navbar id='navbar' collapseOnSelect expand="lg" sticky="top">
      <Container fluid="sm">
        <Navbar.Brand href="/"><img class="logo" src={melkenLogo} alt="Melken Brand Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services">
            
            {
              services.map((service) => (
                 <NavDropdown.Item
                 href={service.id}   
                 className={`mx-1 ${ currentService.name === service.name && 'navActive' }`}
                    key={service.name}>
                  <span onClick={() => {
                    setCurrentService(service, service.id)
                    console.log(service.id);
                    }} 
                  >
                    {capitalizeFirstLetter(service.name)}
                    </span>
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