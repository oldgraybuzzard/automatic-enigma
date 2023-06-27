import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import melkenLogo from '../../assets/images/Small.png';
import * as msal from '@azure/msal-browser';
import JsonServiceList from "../../assets/json/services.json";

const msalConfig = {
  auth: {
    clientId: 'ea48be00-4342-4789-9162-641dd9be4009',
    authority: 'https://login.microsoftonline.com/281950d2-3875-419e-8017-cf5cf823f049',
    redirectUri: window.location.origin,
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

function Navigation() {
  const serviceList=JsonServiceList;
  
  const [currentService, setCurrentService] = useState(serviceList[0]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const loginRequest = {
        scopes: ['user.read', 'openid', 'profile'],
      };

      const response = await msalInstance.loginPopup(loginRequest);
      if (response && response.account) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmployeePage = () => {
    window.open('https://melkensolutions.sharepoint.com/sites/MelkenMagnet', '_blank');
  };

  return (
    <Navbar id="navbar" collapseOnSelect expand="xl" sticky="top">
      <Navbar.Brand as={Link} to="/" className="mx-3">
        <img className="logo" src={melkenLogo} alt="Melken Brand Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/" className="mx-3">Home</Nav.Link>
          <NavDropdown title="Services" className="mx-3">
            {serviceList.map((service) => (
              <NavDropdown.Item
                href={service.link}
                className={`mx-1 ${currentService.name === service.name ? 'navActive' : ''}`}
                key={service.name}
                onClick={() => setCurrentService(service)}
                style={{ margin: '0.5rem 1rem' }}
              >
                {capitalizeFirstLetter(service.name)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="Government" className="mx-3">
            <NavDropdown.Item href="#capability">Capability Statement</NavDropdown.Item>
            <NavDropdown.Item href="#contract-vehicles">Contract Vehicles</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About" className="mx-3">
            <NavDropdown.Item href="#history">History</NavDropdown.Item>
            <NavDropdown.Item href="#certifications">Certifications</NavDropdown.Item>
           
          </NavDropdown>
          <NavDropdown title="Resources" className='mx-3'>
            <NavDropdown.Item href="#news">News</NavDropdown.Item>
            <NavDropdown.Item href="#success">Success Cases</NavDropdown.Item>
            <NavDropdown.Item href="https://melkensolutions.wordpress.com/" target="_blank">Blog</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contactUs" className="mx-3">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav>
          {loggedIn ? (
            <Nav.Link onClick={handleEmployeePage}>Melken Magnet</Nav.Link>
          ) : (
            <MDBBtn rounded color='link' onClick={handleLogin}>Employee Login</MDBBtn>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
