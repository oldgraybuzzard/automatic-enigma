import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import melkenLogo from '../../assets/images/Small.png';
import EmployeeArea from '../EmployeeArea';
import* as msal from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: 'ea48be00-4342-4789-9162-641dd9be4009',
    authority: 'https://login.microsoftonline.com/281950d2-3875-419e-8017-cf5cf823f049',
    redirectUri: window.location.origin
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

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
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
   try {
      // Login with Microsoft 365 credentials
      const loginRequest = {
        scopes: ['user.read', 'openid', 'profile']
      };

      const response = await msalInstance.loginPopup(loginRequest);
      if (response && response.account) {
        // Authentication successful
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  }
  
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" sticky="top">
      <Container fluid="xxl">
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={melkenLogo} alt="Melken Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
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
             {loggedIn ? (
              <Nav.Link as={Link} to="/employee">Employee Page</Nav.Link>
            ) : (
              <Button variant="secondary" onClick={handleLogin}>Employee Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
