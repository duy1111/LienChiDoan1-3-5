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
                title='Làm định danh điện tử'
                description='Với khẩu hiệu “Tuổi trẻ tiên phong chuyển đổi số”, bắt đầu từ giữa tháng 7, tuổi trẻ LCĐ Xuân Thiều 1-3-5 đã tích cực hỗ trợ cho lực lượng chức năng làm định danh điện tử mức 2 lưu động ở các địa bàn khu dân cư. Đây là việc làm hiệu quả nhằm thực hiện Đề án 06 của Chính phủ “Phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia giai đoạn 2022 - 2025, tầm nhìn đến năm 2030”.'
                ghLink=''
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386597/1-3-5/z4599536403669_bea5c8ef12ac24d5201d1e4e8e721b5d_a0ierj.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386594/1-3-5/z4599536405286_48b8299aba46dd1957b8299aeaa7c7df_gdr9gw.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386593/1-3-5/z4599536396360_391c202b13655cce2ecad175951ba67f_xlfo22.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386590/1-3-5/z4599536339472_9657801720a174da5014ce6204fa3fe2_yieytv.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386592/1-3-5/z4599536391795_c6391ccffe98a6e0c70cae2d8067062f_kr2qzr.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386591/1-3-5/z4599536333845_d52baf9baf6284d81bfaacf84102f2e7_ycxzc9.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386591/1-3-5/z4599536378232_146b2fa7fe86b93076a0a311e27b4c8e_hy9mud.jpg',
                ])}
            />
          </Col> 
        <Col md={12} className="project-card">
            <ImageCard
                title='Liên Chi đoàn 1-3-5 vẽ tranh chuẩn bị cho hội trại'
                description='Để chuẩn bị cho hội trại các thành viên trong gia đình 1-3-5 đang hăng hái chuẩn bị cho hội trại'
                ghLink=''
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385376/1-3-5/z4613723042060_ab841df2ba9de5996b235233905e8319_mgivt2.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385375/1-3-5/z4613723152607_b6147bfca3997a9cbb777dcd93bac1e9_krcxgv.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385375/1-3-5/z4613723101146_af954fb45104c05d53ff83b107d1368f_sszoqz.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385374/1-3-5/z4614005985937_df788291eb735b6959705678333ab052_bol6y8.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385373/1-3-5/z4613723111377_fd49c04ab106da7e892e78108b8912ce_rsylc1.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385371/1-3-5/z4613723033004_efd9884e4d47c64d02b94ae3b54efe43_tfinqa.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385371/1-3-5/z4613723109964_a5937b7ffcf7dd3c1efa3ff79d97376e_b46gci.jpg',

                ])}
            />
          </Col> 
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
                title='teamBuilding'
                description=' 💌Cuộc hành trình đã thu hút nhiều em Thiếu niên, Đoàn viên tích cực hưởng ứng tham gia.Đây cũng là  một sân chơi bổ ích kết nối các thành viên lại với nhau, qua nhiều vòng chơi gay cấn và hấp dẫn, các đội chơi đã thể hiện sự đoàn kết, khéo léo và năng lượng tuổi trẻ của mình. Tuy tất cả đều mệt nhoài sau một buổi chiều năng lượng, nhưng cũng nhờ đó mà chúng ta như xích lại gần nhau hơn, cười với nhau nhiều hơn, có thêm những kỉ niệm đẹp về nhau🫶'
                ghLink=''
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385793/1-3-5/z4599581914261_cf35d99074cfbae5d3d2b2a5c435d403_lam6qf.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385791/1-3-5/z4599581914231_690365299076e8d45084425d9422c7c3_lgy70l.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385788/1-3-5/z4599581907578_fe420696fc11bc2a78f7a8c0b86807c8_d5jvwm.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385787/1-3-5/z4599581907546_48c8033088eaa6fdbf88a5624e78353e_qmd0si.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385787/1-3-5/z4599581923623_fa1b184b7cb65fb09f26f914a96873ba_ehw1fp.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385785/1-3-5/z4599581905177_25d8adc3165ae30341b3c99742020338_end1bx.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385785/1-3-5/z4599581880315_2abfb14d44e40e6475a45717a7aef217_aezhmf.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385784/1-3-5/z4599581861448_8db60177af5cd883afb436bec603ed60_oicuga.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692385781/1-3-5/z4599581896470_a4f743feecfcdbb752d7708b1e99feb4_tobcwz.jpg',

                ])}
            />
          </Col> 
          <Col md={12} className="project-card">
            <ImageCard
                title='Liên Chi đoàn tổ chức thăm mẹ Việt Nam Anh Hùng'
                description='Hoạt động góp phần lan toả đạo lý “uống nước nhớ nguồn”, “đền ơn đáp nghĩa” và sự tri ân của thế hệ trẻ phường nhà với các đối tượng chính sách, người có công cách mạng trước dịp kỷ niệm 76 năm ngày Thương binh Liệt sỹ (27/7/1947 - 27/7/2023).'
                ghLink=''
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386321/1-3-5/z4599573715279_57985d752f25f3e4427d9cd16d566ffd_tgop3m.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386321/1-3-5/z4599573727841_b50ba29f3ae0b3b39bfafc7ccb0031e2_gbzcph.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386321/1-3-5/z4599573722161_4d36b4beaf2b4d218f61c7a22d4f498a_mwn5ce.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386321/1-3-5/z4599573717403_34436981cf36e8082d23ebcc02c13140_kbgcuj.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386320/1-3-5/z4599573704003_d48326956114951b13ea5224d69cb9b1_jcgzt5.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386320/1-3-5/z4599573708816_5be1e6d06ad41b31fa92fae14e821adb_xkqhna.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692386320/1-3-5/z4599573705897_7f599218256be7cafe9fdefd99e283ad_uyjjxa.jpg',
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
