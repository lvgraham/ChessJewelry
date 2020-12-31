import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./HomeGallery.css";

function HomeGallery() {
  return (
    <Container className="gallery">
      <Row md={12}>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2193.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2173.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2162.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2072.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2152.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2133.jpeg" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2144.JPG" rounded/>
        </Col>
        <Col  className="galleryImage" md={3}>
          <Image src="./images/IMG_2135.JPG" rounded/>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeGallery;
