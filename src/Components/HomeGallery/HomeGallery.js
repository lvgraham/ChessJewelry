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
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/934335981/pawn-pendant-sterling-silver?ref=shop_home_active_9"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2193.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/935431163/brazilian-agate-ring-size-7-12-sterling?ref=shop_home_active_4"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2173.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/921544374/bezel-set-milk-opal-in-sterling-silver?ref=shop_home_active_1"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2162.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/934369117/tigereye-sterling-silver-ring-hand-made?ref=shop_home_active_7"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2072.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/935458721/milk-opal-sterling-silver-ring-size-7-34?ref=shop_home_active_2"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2152.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/935423475/louisiana-opal-sterling-silver-vernon?ref=shop_home_active_5"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2133.jpeg" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/921516540/gem-silica-chrysoprase-jasper-sterling?ref=shop_home_active_3"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2144.JPG" rounded />
          </a>
        </Col>
        <Col className="galleryImage" md={3}>
          <a
            href="https://www.etsy.com/listing/935404459/sterling-silver-pendant-handmade-oregon?ref=shop_home_active_6"
            target="_blank" rel="noreferrer"
          >
            <Image src="./images/IMG_2135.JPG" rounded />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeGallery;
