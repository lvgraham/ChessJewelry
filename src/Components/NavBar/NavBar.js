import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./NavBar.css";

function NavBar() {
  return (
    <Container className="navContainer">
      <Row>
        <Navbar>
          <Navbar.Brand className="navImage" href="#home">
            <Image src="./images/chessjewelry.png" />
          </Navbar.Brand>
          <Navbar.Text className="navLinks">
            <div className="link">Home</div>
            <div className="link">About</div>
            <div className="link">Shop</div>
            <div className="link">Contact</div>
          </Navbar.Text>
        </Navbar>
      </Row>
    </Container>
  );
}

export default NavBar;
