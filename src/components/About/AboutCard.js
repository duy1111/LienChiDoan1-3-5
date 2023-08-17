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
            <br /> Sinh hoạt tại đền tưởng niệm mẹ VN anh hùng.
            <br />
            Bao gồm từ Xuân Thiều 1 đến Xuân Thiều 9.
            <br />
            <br />
            Tham gia cùng chúng tôi để được train các kỹ năng:
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
            "🔐 LCĐ XUÂN THIỀU 1-3-5 _ ĐOÀN KẾT_ SÁNG TẠO _ VỮNG MẠNH"{" "}
          </p>
          <footer className="blockquote-footer">1-3-5</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
