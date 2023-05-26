import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Nav';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeePage = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="container">
        <h1>Employee Page</h1>
        <div className="section">
          <h2>Company Information</h2>
        </div>
        <div className="section">
          <h2>HR</h2>
          <div className="subsection">
            <h3>Training</h3>
            <p><a href="https://melken-solutions.com/training/coi/#/">COI</a></p>
          </div>
          <div className="subsection">
            <h3>Policy and Procedures</h3>
          </div>
        </div>
        <div className="section">
          <h2>Quality Management System</h2>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default EmployeePage;
