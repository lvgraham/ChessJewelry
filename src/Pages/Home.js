import React from "react";
import { Link } from "react-router-dom";
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
          <Link to='/' className="link">Home</Link>
          <a href='https://www.etsy.com/shop/ChessJewelry' rel="noreferrer" target='_blank' className="link">Shop</a>
          <Link to='/About' className="link">About</Link>
          <Link to='/Contact' className="link">Contact</Link>
        </Col>
      </Row>
      <HomeGallery />
    </Container>
  );
}

export default Home;
