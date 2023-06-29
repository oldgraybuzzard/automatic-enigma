import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import melkenLogo from '../../assets/images/very-big-320x59.png';
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
  const serviceList = JsonServiceList;
  const [currentService, setCurrentService] = useState(serviceList[0]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [showNavCentred, setShowNavCentred] = useState(false);

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
    <header>
      <MDBNavbar expand="lg" sticky light className='w-auto p-1 mb-2 bg-light bg-gradient text-dark rounded-5'>
        <MDBContainer fluid>
          <MDBNavbarBrand as={Link} to="/">
            <img
              className="logo"
              src={melkenLogo}
              alt="Melken Brand Logo"
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
              data-target='#navbarCentered'
              aria-controls='navbarCentered'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavCentred(!showNavCentred)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavCentred} center id="navbarCentered">
            <MDBNavbarNav breakpoint="lg" className='justify-content-end'>
              <MDBNavbarItem className='active text-uppercase fw-bold'>
                <MDBNavbarLink href="/">Home</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-uppercase fw-bold" role='button'>
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu className='bg-info p-2 fs-6'>
                  {serviceList.map((service) => (
                    <MDBDropdownItem
                      href={service.link}
                      className={`mx-1 ${currentService.name === service.name ? 'navActive' : ''}`}
                      key={service.name}
                      onClick={() => setCurrentService(service)}
                    >
                      {capitalizeFirstLetter(service.name)}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-uppercase fw-bold" role='button'>
                  Government
                </MDBDropdownToggle>
                <MDBDropdownMenu className='bg-info p-2 fs-6'>
                  <MDBDropdownItem href="#capability">Capability Statement</MDBDropdownItem>
                  <MDBDropdownItem href="#contract-vehicles">Contract Vehicles</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-uppercase fw-bold" role='button'>
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu className='bg-info p-2 fs-6'>
                  <MDBDropdownItem href="#history">History</MDBDropdownItem>
                  <MDBDropdownItem href="#certifications">Certifications</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-uppercase fw-bold" role='button'>
                  Resources
                </MDBDropdownToggle >
                <MDBDropdownMenu className='bg-info p-2 fs-6'>
                  <MDBDropdownItem href="#news">News</MDBDropdownItem>
                  <MDBDropdownItem href="#success">Success Cases</MDBDropdownItem>
                  <MDBDropdownItem href="https://melkensolutions.wordpress.com/" target="_blank">
                    Blog
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBNavbarItem className='text-uppercase fw-bold'>
                <MDBNavbarLink href="#contactUs">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          

          <MDBNavbarNav className='justify-content-end'>
            {loggedIn ? (
              <MDBNavbarItem>
                <MDBNavbarLink onClick={handleEmployeePage}>Melken Magnet</MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBBtn rounded color='secondary' onClick={handleLogin}>
                  Employee Login
                </MDBBtn>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className='p-3 text-center bg-light'>
        <div>
          <h1 className='text-center mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-4'>{capitalizeFirstLetter('The Success of Your Mission Is Our Mission!')}</h1>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
