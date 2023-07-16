import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ImageCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Các hoạt động của <strong className="purple">1-3-5 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một số hoạt động của chúng tôi
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/357490843_550858027243710_9131172159353712382_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C4r9QL-gkzgAX_1a9UA&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCIIgcDGXA2YnvAw6emejJO3DDBTLdEz8c0u4zC6Gqu2A&oe=64B76F4B'}
              isBlog={false}
              title="Team Buiding"
              description="Cuộc hành trình đã thu hút nhiều em Thiếu niên, Đoàn viên tích cực hưởng ứng tham gia.Đây cũng là  một sân chơi bổ ích kết nối các thành viên lại với nhau, qua nhiều vòng chơi gay cấn và hấp dẫn, các đội chơi đã thể hiện sự đoàn kết, khéo léo và năng lượng tuổi trẻ của mình. Tuy tất cả đều mệt nhoài sau một buổi chiều năng lượng, nhưng cũng nhờ đó mà chúng ta như xích lại gần nhau hơn, cười với nhau nhiều hơn, có thêm những kỉ niệm đẹp về nhau🫶"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/100069585531729/videos/568123255523801"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/355657536_301673752213967_7432439093038866416_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=eg847mv2Q08AX8kJXKz&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD4z8H7CtUDNMf8JeTdjTrrpZBJma21CQUdZ76h7u-moA&oe=64B91F7D'}
              isBlog={false}
              title="Tiếp sức mùa thi"
              description="🌤️ Cái nắng gay gắt của ngày hôm nay vẫn không thể làm lung lay nhiệt huyết của chúng mình. Các sĩ tử cứ yên tâm chiến đấu vì phía sau luôn có các chiến sĩ TSMT sẵn sàng hỗ trợ hết mình ❣️"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/HoaHiepNam/posts/pfbid0fjXdJFdWDYujGPdo28s2ZnrZCiXtngaJoayTiM3u8xwhcFPwf6dUpk644qh8uCjyl"

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/351794255_666407962017433_1418053306551814355_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6sbKXyHNo1MAX_AZNAQ&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCWveIIThcf9rdJrDWHDaEd3xEFHAnidubfKkmfIrkDfA&oe=64B7983E'}
              isBlog={false}
              title="💥 [TIẾP SỨC MÙA THI VÀO 10 NĂM 2023] 💥"
              description="ngày 06/6/2023 diễn ra  kỳ thi vào 10 THPT, với tinh thần Xung kích - Tình nguyện - Sẵn sàng, Liên Chi Đoàn Xuân Thiều 1-3-5 tích cực tham gia các hoạt động tình nguyện “Tiếp sức mùa thi năm 2023”.
              🌼 Ngay từ sáng sớm, màu áo xanh Đoàn viên thanh niên đã có mặt đông đủ để sẵn sàng hỗ trợ các thí sinh và phụ huynh trong kỳ thi vào lớp 10 THPT."         
              
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/permalink.php?story_fbid=pfbid0YJhG8jCboHNtuNz1hYirRACdmMJkA6VeFLk5MAK8vs59wRau2FNfxuvjMMEaTsNQl&id=100069585531729"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              video={`
              <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100069585531729%2Fvideos%2F1333834090895628%2F&show_text=false&width=560&t=0" width="400" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            `}
              title="TIẾT MỤC NHẢY HIỆN ĐẠI: Mashup DON’T NOW WHAT TO DO x BABYMONTER"
              description="tiết mục nhảy hiện đại sôi động đến từ  LCĐ XT 1-3-5. Với từng động tác dứt khoác kết hợp với ánh đèn chớp nháy theo điệu nhạc đã tạo nên một điểm nhấn khó quên. Chúng mình  vô cùng biết ơn những tiếng hò hét, vỗ tay của tất cả mọi người🫶"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/100069585531729/videos/1333834090895628/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              video={`
              <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100069585531729%2Fvideos%2F796571341883188%2F&show_text=false&width=560&t=0" width="400" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
              `}
              isBlog={false}
              title="Các hoạt động năm 2022"
              description="Đây là chiếc video tràn ngập kỉ niệm về 1 năm đáng nhớ"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/100069585531729/videos/574598281539340/"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
