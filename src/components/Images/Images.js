import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ImageCard from "./ImageCard";



function Images() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Images của <strong className="purple">1-3-5 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một chút ảnh của các <strong className="purple">member 1-3-5</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ImageCard
                title='Tự sướng'
                description='Ảnh tự sướng của các member 1-3-5'
                ghLink='https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5'
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong6_cvvcvv.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong10_niurxd.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong11_aq1jpm.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong3_mnuixo.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong5_ieznyg.jpg'
                ])}
            />
          </Col>   
          <Col md={12} className="project-card">
            <ImageCard
                title='Đi biển'
                description='Dậy sớm tắm biển quay tóp tóp thôi!!!'
                ghLink=''
                imgPath={JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496772/tu-suong-1-3-5/tu-suong1_cuvdvf.jpg',
                ])}
            />
          </Col>      
          <Col md={12} className="project-card">
            <ImageCard
                title='Văn nghệ'
                description='Một chút ảnh hậu trường'
                ghLink=''
                imgPath={ JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong2_vu79to.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496775/tu-suong-1-3-5/tu-suong8_ryxkoz.jpg'
                ])}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Images;
