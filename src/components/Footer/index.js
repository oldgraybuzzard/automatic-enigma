import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import melkenLogo from '../../assets/images/Small.png';
import JsonServiceList from "../../assets/json/services.json";

function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceList=JsonServiceList;

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://www.facebook.com/melkensolutions' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/MelkenSolutions' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.linkedin.com/company/melken-solutions-llc/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/orgs/Melken-Solutions' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md='3' lg='3' xl='3' className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <Image src={melkenLogo} />
                Melken Solutions, LLC                  
              </h6>
              <MDBTypography tag='small'>
                We pride ourselves on our ability to provide services that satisfy the requirements of our valued customers.
              </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Services
              </h6>
                {serviceList.map((service, i) => (
                  <MDBTypography key={i} id={service.id} tag='small' >
                    <a href={service.link} className='text-reset'>
                      {service.name}
                    </a><br />
                  </MDBTypography>
                ))}
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful Links
              </h6>
              <MDBTypography tag='small'>
                <a href="https://melkensolutions.blog/" target="_blank" rel="noreferrer" className='text-reset'>
                  Blog
                </a>
              </MDBTypography><br />
              <MDBTypography tag='small'>
                <a href="#capability" className='text-reset'>
                  Capability Statement
                </a>
              </MDBTypography><br />
              <MDBTypography tag='small'>
                <a href="#certifications" className='text-reset'>
                  Certifications
                </a>
              </MDBTypography><br />
              <MDBTypography tag='small'>
                <a href="#contract-vehicles" className='text-reset'>
                  Contract Vehicles
                </a>
              </MDBTypography>
              <MDBTypography tag='small'>
                <a href="#news" className='text-reset'>
                  News
                </a>
              </MDBTypography><br />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <MDBTypography tag='small'>
                <MDBIcon icon="home" className="me-3" />
                810 Eyrie Drive, Oviedo, FL 32765
              </MDBTypography><br />
              <MDBTypography tag='small'>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto: info@melken-solutions.com">Email Us</a>
              </MDBTypography><br />
              <MDBTypography tag='small'>
                <MDBIcon icon="phone" className="me-3" />
                407-977-5673
              </MDBTypography><br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
        &copy; {currentYear} <a className="text-reset fw-bold" href="https://melken-solutions.com">Melken Solutions</a> - All Rights Reserved |
        <Link to="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Statement
          </Link>
          |
        <Link to="/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
        </Link>
          |
        <Link to="/returns" target="_blank" rel="noopener noreferrer">
              Returns & Refund Policy
        </Link>
      </div>
    </MDBFooter>
  );
}

export default Footer;
