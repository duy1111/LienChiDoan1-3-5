import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { user } from "../../common/data/user";
import {AiOutlineUser} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

function Person2() {
 const navigate = useNavigate();

  let changeDetail = (id) => {
    navigate(`/user/${id}`)
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {user?.length > 0 && user.map((item,index) => {
        if(item.role === 'R2'){
          return (
          
            <Col xs={12} md={3} sm={6} xl={2} className="tech-icons">
              <img className="image" width={150} height={150} src={item?.image} alt={item?.title}  />
              <p>{item.name}</p>
              <Button variant="primary" onClick={() => changeDetail(item.id)}>
                <AiOutlineUser /> &nbsp;
                  {"Info"}
                </Button>
            </Col>
          )
        }
        
      })}
    </Row>
  );
}

export default Person2;
