import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../Components/NavBar/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



function About() {
  return (
    <Container>
      <NavBar />
      <hr/>
      <h1>Contact</h1>
      <hr/>
      <h4><FontAwesomeIcon icon={faMapMarkerAlt}/> Edwards, CO</h4>
      <h4><FontAwesomeIcon icon={faEnvelopeSquare}/> chessjewelry@gmail.com</h4>
      <h4><FontAwesomeIcon icon={faFacebookSquare}/> https://facebook.com/chessjewelry</h4>
      <h4><FontAwesomeIcon icon={faInstagram} /> https://www.instagram.com/chessjewelry100/</h4>
    </Container>
  );
}

export default About;


// https://facebook.com/chessjewelry
// https://www.etsy.com/shop/ChessJewelry
// https://www.instagram.com/chessjewelry100/

//<a href="mailto:chessjewelry@gmail.com">