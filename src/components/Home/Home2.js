import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LIÊN CHI ĐOÀN <span className="purple">1-3-5</span> 
            </h1>
            <p className="home-about-body">
            lợi ích khi tham gia sinh hoạt hè với Liên Chi đoàn 1-3-5
            , I think… 🤷‍♂️
              <br />
              <br />Phát triển kỹ năng giao tiếp, gặp gỡ và tương tác với 
              <i>
                <b className="purple"> các bạn cùng trang lứa khác nhau.</b>
              </i>
              <br />
              <br />
              Rèn luyện và phát triển &nbsp;
              <i>
                <b className="purple">kỹ năng lãnh đạo  </b> 
              thông qua các hoạt động{" "}
                <b className="purple">
                nhóm.
                </b>
              </i>
              <br />
              <br />
              Học hỏi kỹ năng mới thông qua hoạt động   
 <b className="purple"> giáo dục</b> và
              <i>
                <b className="purple">
                  {" "}
                  đào tạo.
                </b>
              </i>
              &nbsp; như
              <i>
                <b className="purple">Giải mật thư, trò chơi và văn nghệ...</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Tìm tôi trên</h1>
            <p>
              Hãy <span className="purple">kết nối </span>với tôi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100069585531729"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
