import React from "react";
import { Link } from "react-router-dom";
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
          <div>
            <Link to="/" className="navImageContainer">
              <Image className="navImage" src="./images/chessjewelry.png" />
            </Link>
          </div>
          <div>
            <Navbar.Text className="navLinks">
              <Link to="/" className="link">
                Home
              </Link>
              <a
                href="https://www.etsy.com/shop/ChessJewelry"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Shop
              </a>
              <Link to="/About" className="link">
                About
              </Link>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </Navbar.Text>
          </div>
        </Navbar>
      </Row>
    </Container>
  );
}

export default NavBar;
