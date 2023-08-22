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
                title='🇻🇳🎉🌻TUỔI TRẺ XUÂN THIỀU 1-3-5 _ HỘI TRẠI TRUYỀN THỐNG “TIẾP BƯỚC CHA ANH” 2023🇻🇳🎉🌻'
                description='☀Dưới cái nắng của mùa hè những đôi chân vẫn không dừng lại, vẫn cháy hết mình trong mọi cuộc chơi, cùng nhau vượt qua hết những thử thách và ngồi lại với nhau vui đùa hát ca - nắm tay nhau tạo nên những khoảnh khắc đẹp đẽ nhất. Hãy tự hào vì tất cả chúng ta đã chơi hết mình, cháy hết mình để có một “mùa trại” thật bùng nổ và nhiều ý nghĩa.
                💓Khoảng thời gian tươi đẹp ấy, những khoảnh khắc khó quên ấy xin gửi lại nơi đây. Những bức ảnh lưu giữ kỉ niệm tuổi trẻ của LCĐ Xuân Thiều 1-3-5🫶'
                ghLink=''
                imgPath= {JSON.stringify(['https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671094/1-3-5/368867848_577800514549461_1340901547834554788_n_1_n6q2ot.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671091/1-3-5/368691308_577801464549366_4904833289819707650_n_xeccmc.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671088/1-3-5/368676508_577801067882739_7857393734333696491_n_fybrms.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671097/1-3-5/369200515_577801454549367_332449588129935980_n_rvlcln.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671096/1-3-5/369195955_577800741216105_1437046318243108860_n_y2ghwg.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671095/1-3-5/369198833_577801164549396_3705569012140383117_n_fwvqvq.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671095/1-3-5/369056215_577800777882768_1946634184560965270_n_qrmxtl.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671095/1-3-5/369048757_577800771216102_4021713525908147111_n_avm8wk.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671095/1-3-5/369195555_577801091216070_521715853044572672_n_lne9ls.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671094/1-3-5/369044023_577801034549409_2647126122574457331_n_nhekfb.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671093/1-3-5/368996433_577801001216079_5368815512491113685_n_ve6srh.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671093/1-3-5/368981714_577801537882692_2617894434112562757_n_yiele6.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671092/1-3-5/368821807_577800847882761_1966245163572228554_n_e2jnad.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671092/1-3-5/368904294_577801491216030_1953296383598119855_n_opq9as.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671092/1-3-5/368851352_577801154549397_1858401682735387009_n_epasni.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671092/1-3-5/368737053_577801117882734_2465275848957386401_n_yght8n.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671092/1-3-5/368745435_577800787882767_4871391451556691360_n_lb6i8v.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671091/1-3-5/368731241_577801507882695_5161599373284911477_n_zmvhp1.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671091/1-3-5/368697065_577800874549425_958156366767767609_n_xnsw2b.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671091/1-3-5/368724005_577800907882755_2713806913006805452_n_tgjntl.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671091/1-3-5/368724003_577800554549457_8444268224159035671_n_xuni8q.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671090/1-3-5/368694867_577801131216066_7316740939517568243_n_fj8qh3.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671090/1-3-5/368723993_577801497882696_431664071714247438_n_w13vvt.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671090/1-3-5/368689334_577800841216095_3389338207503217116_n_l7nrrz.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671090/1-3-5/368696812_577800711216108_8990358843069532199_n_nboxyi.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671089/1-3-5/368688379_577800927882753_572077879262136945_n_ickr1z.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671088/1-3-5/368677767_577800661216113_7671373765847620357_n_mchygk.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671088/1-3-5/368681890_577801137882732_667356959036876984_n_gmrwyh.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671088/1-3-5/368676694_577800677882778_5742130071583084658_n_ogdweb.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671088/1-3-5/368676212_577801054549407_760953916054240647_n_oluyrj.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671087/1-3-5/368639333_577800804549432_3561988166791955567_n_zho7na.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368238818_577803974549115_1954504693570108696_n_osotlk.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368444884_577801517882694_5246640785546081510_n_ho3v7x.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368332811_577797664549746_514789342764132004_n_bu78mo.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368300877_577798827882963_6606075187864414155_n_rmmqh3.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368276112_577798091216370_3927774952644935468_n_dfa0qk.jpg',
                'https://res.cloudinary.com/dcro4uhpj/image/upload/v1692671086/1-3-5/368353557_577797767883069_7615466681141998113_n_oe2nwu.jpg',
                ])}
            />
          </Col> 
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
