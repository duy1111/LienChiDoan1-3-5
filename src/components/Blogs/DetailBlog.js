import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import Blogs from "../../common/data/blogs";
const DetailBlog = () => {
    let { id } = useParams();

    let arrData = Blogs
    let data = arrData.find((item) => item.id == id)
  var settings = {
    dots: true,
  };
  let images = data.image;
  
  return (
    <Container
      style={{ padding: "200px 12px 0px 12px", justifyContent: "center" }}
    >
      <Particle />
        
        

          <Row  style={{ justifyContent: "center", paddingBottom: "10px", paddingTop:'20px' }}>
            <Col xs={12} md={8} >
            <h1 className="project-heading">
              <strong className="purple">{data.title}</strong>
            </h1>
            </Col>
            <Col xs={12} md={12}>
              <div className="image-container">
                <Slider {...settings}>
                  {images?.length > 0 &&
                    images.map((item, index) => {
                      return (
                        <div key={index}>
                          <img
                            className="image-slide__item"
                            alt={index}
                            src={item}
                          />
                        </div>
                      );
                    })}
                </Slider>
              </div>

            </Col>
          </Row>
          <Row style={{padding:'24px 18px',display:'flex' , justifyContent:'center'}} >
                <Col xs={12} md={10} style={{fontSize:"1.6rem", color:'#8a49a8' }} >
                    <p>{data.description}</p>
                </Col>
                <Col xs={12} md={10} style={{ fontSize:"1rem",color:'#ffffff',display:'flex',justifyContent:'space-between', paddingTop:'32px' }} >
                    <p>Ngày chỉnh sửa: <strong className="purple">{data.updatedAt}</strong></p>
                    <p>Ngày tạo: <strong className="purple">{data.createdAt}</strong></p>
                </Col>
                
          </Row>
        

      
    </Container>
  );
};

export default DetailBlog;
