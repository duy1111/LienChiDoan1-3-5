import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const CardOfBlog = (props) => {
 const navigate = useNavigate();

  let images = props.data.image[0];

  let changeDetail = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <Card className="blog-card-view">
      <Container>
        <Row style={{ justifyContent: "space-between", paddingBottom: "10px" }}>
          <Col
            md={4}
            xs={12}
            style={{
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "8px",
              paddingRight: "8px",
              height: "300px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              style={{ Height: "150px", width: "100%", objectFit: "cover" }}
              src={images}
              alt="blog"
              className="img-fluid"
            />
          </Col>
          <Col
            md={8}
            xs={12}
            style={{
              paddingLeft: "12px",
              paddingTop: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "12px" }}>
              {props.data.title}
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "12px" }}>
              <Col xs={12} md={6} xl={3}>
                <Button
                  style={{}}
                  variant="primary"
                  onClick={() => changeDetail(props.data.id)}
                
                >
                  <AiOutlineUser /> &nbsp;
                  {"Chi tiết"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CardOfBlog;
