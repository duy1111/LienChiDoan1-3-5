import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { user } from "../../common/data/user";
import { AiOutlineUser } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

function Person2() {
  const navigate = useNavigate();

  let changeDetail = (id) => {
    navigate(`/user/${id}`)
  }

  function extractLastName(name) {
    const parts = name.split(' ');
    return parts[parts.length - 1];
  }
  let data = user.filter((item) => item.role === "R2");
  data.sort((a, b) => {
    const lastNameA = extractLastName(a.name.trim()).toUpperCase();
    const lastNameB = extractLastName(b.name.trim()).toUpperCase();

    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });

  console.log(data);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {data?.length > 0 && data.map((item, index) => {

        return (

          <Col xs={12} md={3} sm={6} xl={2} className="tech-icons">
            <img className="image" width={150} height={150} src={item?.image} alt={item?.title} />
            <p>{item.name}</p>
            <Button variant="primary" onClick={() => changeDetail(item.id)}>
              <AiOutlineUser /> &nbsp;
              {"Info"}
            </Button>
          </Col>
        )


      })}
    </Row>
  );
}

export default Person2;
