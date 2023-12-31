import React from "react";
import { user } from "../../common/data/user";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { ImPointRight } from "react-icons/im";
import {BiMailSend} from "react-icons/bi"
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookSquare} from "react-icons/fa"
const UserDetail = () => {
  let { id } = useParams();

  let data = user.find((item) => item.id == id);
  console.log(data.image);
  return (
    <Container
      style={{ paddingTop:'200px', justifyContent: "center" }}
    >
  

      <Row
        style={{
          paddingBottom: "40px",
          paddingTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Col xs={12} md={6} xxl={3}>
          <img
            src={data.image}
            alt="home pic"
            className="image"
            style={{ height: "300px", width: "300px" }}
          />
        </Col>
        <Col xs={12} md={6} xxl={6}>
        
          <h1 style={{marginTop:'100px'}} className="project-heading">
            <strong className="purple">{data?.name}</strong>
          </h1>
          <h1 style={{ fontSize: "2.1em", paddingTop:'24px',paddingBottom: "20px" ,color:"#ffffff" }}>
             Sinh ngày: <strong className="purple">{data?.birtDay}</strong>
            </h1>
        </Col>
      </Row>
      <Row
        style={{
            paddingBottom: "40px",
            paddingTop: "30px",
            
        }}
      >
        <Col xs={12} md={8} style={{color:'#ffffff' ,overflow:'hidden'}}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào mọi người, Tôi là <span className="purple">{data.name}</span>
            {' '}đến từ <span className="purple">Liên chi đoàn 1-3-5</span>
          
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <BiMailSend style={{fontSize:'2.7rem',paddingLeft:'12px',color:'red'}} /> {data?.mail}
            </li>
            <li className="about-activity">
              <ImPointRight /><a href={data?.insUrl} target="_blank" rel="noopener noreferrer" ><AiFillInstagram style={{fontSize:'2.8rem',paddingLeft:'12px',color:'#BC2A8D'}} /></a> <span>{data.insName === '' ? data.insUrl: data.insName}</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href={data?.fbUrl} target="_blank" rel="noopener noreferrer" ><FaFacebookSquare style={{fontSize:'2.4rem',paddingLeft:'12px',color:'#365899'}} /></a> <span>{data.fbUrl}</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{data.description}!"{" "}
          </p>
          <footer className="blockquote-footer">{data?.name}</footer>
        </blockquote>
        </Col>
      </Row>
      <Row style={{}}></Row>
    </Container>
  );
};

export default UserDetail;
