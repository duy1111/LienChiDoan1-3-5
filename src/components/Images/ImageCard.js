import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsImageAlt } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageCard(props) {
    var settings = {
        dots: true
    };
    let images = JSON.parse(props?.imgPath)
  return (
    <Card className="project-card-view">
        
        <Card.Title style={{ paddingTop: 15 }} className="heading" ><strong className="main-name">{props.title}</strong></Card.Title>
        <Card.Text className="" style={{ textAlign: "center" ,fontSize:"1.6rem" }}>
          {props.description}
        </Card.Text>

      
      <Card.Body>
        
        <div className="image-container">
            <Slider {...settings}>
                {images?.length > 0 && images.map((item,index) => {
                    return (
                        <div key={index}>
                            <img className="image-slide__item" alt={index} src={item} />
                        </div>
                    )
                })}
            </Slider>
      </div>
        
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" href={props.ghLink} disabled target="_blank">
          <BsImageAlt /> &nbsp;
          {props.isBlog ? "Blog" : "Link"}
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default ImageCard;