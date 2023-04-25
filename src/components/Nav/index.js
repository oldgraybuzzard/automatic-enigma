import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import melkenLogo from '../../assets/images/Small.png';

function serviceSelected(name) {
    console.log(`${name} clicked`)
  }

function Navigation() {
  const services = [
    {
      name: "Project Management",
      description: "Achieve your project goals with ease and precision through Melken Solutions' proven project management approach."
    },
    {
      name: "Interactive Electronic Technical Manuals (IETM)",
      description: "Upgrade your technical game with IETMs - interactive, intuitive, and instant access to all your technical documentation needs."
    },
    {
      name: "Engineering Support",
      description: "Experience superior performance and cost savings with Melken Solutions' training system design and maintenance."
    },
    {
      name: "Field Engineering Support",
      description: "Solving complex problems on the ground with precision and expertise."
    },
    {
      name: "Integrated Logistics Support (ILS)",
      description: "From planning to implementation, Melken Solutions' integrated logistics support has you covered."
    },
    {
      name: "Training Solutions",
      description: "Maximize your training device ROI with Melken Solutions' tailored training programs."
    },
    {
      name: "Data Entry",
      description: "Maximize your productivity and streamline your operations with Melken Solutions' reliable data entry solutions."
    },
    {
      name: "Information Management",
      description: "Achieve optimal data organization and accessibility with Melken Solutions' expert information management services."
    },
    {
      name: "508 Accessibility",
      description: "Unlock your digital content's full potential with Melken Solutions' inclusive 508 Accessibility services."
    },
    {
      name: "Document Conversion",
      description: "Unlock the full potential of your documents with Melken Solutions' comprehensive conversion solutions."
    }

  ];

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
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
                  className="mx-1"
                  key={service.name}
                  >
                    <span onClick={() => serviceSelected(service.name)} >
                      {service.name}
                    </span>
                  </NavDropdown.Item>
              ))}
              </NavDropdown>

            <NavDropdown title="Government">
              <NavDropdown.Item href="#capability-statement">Capability Statement</NavDropdown.Item>
              <NavDropdown.Item href="#contract-vehicles">Contract Vehicles</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About">
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