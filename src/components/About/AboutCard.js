import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào mọi người, Chúng tôi là <span className="purple">Liên Chi đoàn 1-3-5 </span>
            từ <span className="purple"> Liên Chiểu, Đà Nẵng.</span>
            <br /> Description
            <br />
            Description
            <br />
            <br />
            Tham gia cùng chúng tôi để được train các kỹ năng
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Làm việc nhóm
            </li>
            <li className="about-activity">
              <ImPointRight /> Giải mật thư
            </li>
            <li className="about-activity">
              <ImPointRight /> Văn nghệ
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Slogan của liên chi đoàn!"{" "}
          </p>
          <footer className="blockquote-footer">1-3-5</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
