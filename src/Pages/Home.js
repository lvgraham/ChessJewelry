import React from "react";
import HomeLogo from "../Components/HomeLogo/HomeLogo";
import HomeGallery from "../Components/HomeGallery/HomeGallery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../Components/HomeLogo/HomeLogo.css";

function Home() {
  return (
    <Container>
      <HomeLogo />
      <Row className="linksContainer">
        <Col lg={8} className="homeLinks">
          <div className="link">Home</div>
          <div className="link">About</div>
          <div className="link">Shop</div>
          <div className="link">Contact</div>
        </Col>
      </Row>
      <HomeGallery />
    </Container>
  );
}

export default Home;
