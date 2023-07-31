import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ImageCard from "./ImageCard";



function Images() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Images của <strong className="purple">1-3-5 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một chút ảnh của các <strong className="purple">member 1-3-5</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12} className="project-card">
            <ImageCard
                title='🥇 Hội thi " THANH THIẾU NIÊN HOÀ HIỆP NAM VỚI PHÒNG CHỐNG TỆ NẠN XÃ HỘI" năm 2023 ❤️‍🔥 '
                description='Chúng ta đã cùng nhau kết thúc ngày hội với thành tích vô cùng xứng đáng - "NHẤT TOÀN ĐOÀN” gọi tên LCĐ Xuân Thiều 1-3-5 🥇🥇🥇'
                ghLink='https://www.facebook.com/permalink.php?story_fbid=pfbid0TN2WyRpDcpEGFVUnCgipWqHUKMrMnGKLqiENk679CpPQB1rcuNckEyKmZKcGKF4Hl&id=100069585531729'
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788611/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/364605723_566820698980776_2530344648879607465_n_fx5pn1.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788612/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/z4559551816190_ab05c00b591b4b3acb909b74ae611c3a_fcommx.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788612/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/z4559566710654_0c3aff5d9221a6459a130fb06180bc5c_djmujl.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788612/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/364683823_566834545646058_6086237320193906952_n_lvr3gr.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788611/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/364257135_566834625646050_271806315690307184_n_xk5b7i.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788611/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/363929124_566834588979387_2808945531091002197_n_fqkhvi.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788611/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/364028292_566834532312726_7229513236244886697_n_yygirt.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1690788611/phong-ch%E1%BB%91ng-t%E1%BB%87-n%E1%BA%A1n/364026984_566834602312719_7164331749805913226_n_itwvya.jpg'
                ])}
            />
          </Col> 
          <Col md={12} className="project-card">
            <ImageCard
                title='Tự sướng'
                description='Ảnh tự sướng của các member 1-3-5'
                ghLink='https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5'
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong6_cvvcvv.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong10_niurxd.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496774/tu-suong-1-3-5/tu-suong11_aq1jpm.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong3_mnuixo.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong5_ieznyg.jpg'
                ])}
            />
          </Col>   
          <Col md={12} className="project-card">
            <ImageCard
                title='Đi biển'
                description='Dậy sớm tắm biển quay tóp tóp thôi!!!'
                ghLink=''
                imgPath={JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496772/tu-suong-1-3-5/tu-suong1_cuvdvf.jpg',
                ])}
            />
          </Col>      
          <Col md={12} className="project-card">
            <ImageCard
                title='Văn nghệ'
                description='Một chút ảnh hậu trường'
                ghLink=''
                imgPath={ JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496773/tu-suong-1-3-5/tu-suong2_vu79to.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1689496775/tu-suong-1-3-5/tu-suong8_ryxkoz.jpg'
                ])}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Images;
