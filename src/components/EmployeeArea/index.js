import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EmployeePage() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Welcome, Employee!</h3>
          {/* Employee area content */}
        </Col>
      </Row>
    </Container>
  );
}

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/employee" element={<EmployeePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

export default EmployeePage;
