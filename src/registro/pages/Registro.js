import { Col, Container, Row, Alert } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Registroform from "../components/Registroform"

const Registro = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
return (
    <React.Fragment>
    <h1 className="text-center mt-5 mb-5">Registro usuario</h1>
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Registroform
      
          />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

}

export default Registro;