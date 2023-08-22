import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ImageCards";
import Particle from "../Particle";



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
              imgPath={'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692670544/1-3-5/368867848_577800514549461_1340901547834554788_n_ysxfiz.jpg'}
              isBlog={false}
              title="🇻🇳🎉🌻TUỔI TRẺ XUÂN THIỀU 1-3-5 _ HỘI TRẠI TRUYỀN THỐNG “TIẾP BƯỚC CHA ANH” 2023🇻🇳🎉🌻"
              description="☀Dưới cái nắng của mùa hè những đôi chân vẫn không dừng lại, vẫn cháy hết mình trong mọi cuộc chơi, cùng nhau vượt qua hết những thử thách và ngồi lại với nhau vui đùa hát ca - nắm tay nhau tạo nên những khoảnh khắc đẹp đẽ nhất. Hãy tự hào vì tất cả chúng ta đã chơi hết mình, cháy hết mình để có một “mùa trại” thật bùng nổ và nhiều ý nghĩa.
              💓Khoảng thời gian tươi đẹp ấy, những khoảnh khắc khó quên ấy xin gửi lại nơi đây. Những bức ảnh lưu giữ kỉ niệm tuổi trẻ của LCĐ Xuân Thiều 1-3-5🫶"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/permalink.php?story_fbid=pfbid023iaTrvWD55ypjANg2dZvxmVcCUwFXSmc6FKhnpiSrgBMJ9SZwD2Z1p7YsLWbQbMwl&id=100069585531729"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788612/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/z4559566710654_0c3aff5d9221a6459a130fb06180bc5c_djmujl.jpg'}
              isBlog={false}
              title="THANH THIẾU NIÊN HOÀ HIỆP NAM VỚI PHÒNG CHỐNG TỆ NẠN XÃ HỘI"
              description="Chúng ta đã cùng nhau kết thúc ngày hội với thành tích vô cùng xứng đáng - 'NHẤT TOÀN ĐOÀN' gọi tên LCĐ Xuân Thiều 1-3-5 🥇🥇🥇"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/permalink.php?story_fbid=pfbid0TN2WyRpDcpEGFVUnCgipWqHUKMrMnGKLqiENk679CpPQB1rcuNckEyKmZKcGKF4Hl&id=100069585531729"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690789158/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/357490843_550858027243710_9131172159353712382_n_rcpden.jpg'}
              isBlog={false}
              title="Team Buiding"
              description="Cuộc hành trình đã thu hút nhiều em Thiếu niên, Đoàn viên tích cực hưởng ứng tham gia.Đây cũng là  một sân chơi bổ ích kết nối các thành viên lại với nhau, qua nhiều vòng chơi gay cấn và hấp dẫn, các đội chơi đã thể hiện sự đoàn kết, khéo léo và năng lượng tuổi trẻ của mình. Tuy tất cả đều mệt nhoài sau một buổi chiều năng lượng, nhưng cũng nhờ đó mà chúng ta như xích lại gần nhau hơn, cười với nhau nhiều hơn, có thêm những kỉ niệm đẹp về nhau🫶"
              ghLink="https://www.facebook.com/profile.php?id=100069585531729"
              demoLink="https://www.facebook.com/100069585531729/videos/568123255523801"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690789113/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/355657536_301673752213967_7432439093038866416_n_oyixex.jpg'}
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
              imgPath={'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690789216/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/351794255_666407962017433_1418053306551814355_n_laxrdu.jpg'}
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
