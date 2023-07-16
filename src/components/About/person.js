import React from "react";
import { Col, Row } from "react-bootstrap";
import { user } from "../../common/data/user";

function Person() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {user?.length > 0 && user.map((item,index) => {
        if(item.role === 'R1'){
          return (
          
            <Col xs={4} md={2} className="tech-icons">
              <img className="image" width={100} height={100} src={item?.image} alt={item?.title}  />
              <p>{item.name}</p>
            </Col>
          )
        }
        
      })}
      
      
      
    </Row>
  );
}

export default Person;
