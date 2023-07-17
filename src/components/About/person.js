import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { user } from "../../common/data/user";
import {BsFacebook} from "react-icons/bs"
function Person() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {user?.length > 0 && user.map((item,index) => {
        if(item.role === 'R1'){
          return (
          
            <Col xs={12} md={3} sm={6} xl={2}  className="tech-icons">
              <img className="image" width={150} height={150} src={item?.image} alt={item?.title}  />
              <p>{item.name}</p>
              <Button variant="primary" href={item.fbUrl} target="_blank">
                <BsFacebook /> &nbsp;
                  {"Facebook"}
                </Button>
            </Col>
          )
        }
        
      })}
      
      
      
    </Row>
  );
}

export default Person;
