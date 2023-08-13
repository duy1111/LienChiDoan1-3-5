import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import blogData from "../../common/data/blogs"
import CardOfBlog from "./BlogCard";




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
          {blogData && blogData.map((item) => {
            return (
              <Col key={item.id} md={12} className="blog-card">
                <CardOfBlog data={item}  />
          </Col>     
            )
          })}

           
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
