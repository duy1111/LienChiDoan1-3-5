import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";



function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Blogs của <strong className="purple">1-3-5 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một số Blogs của <strong className="purple">1-3-5</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            
          </Col>   
          
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
