import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "./ContactCard.css"



function ContactCard() {
  return (
    <Container className="contactCard">
      <Row>
      <Col>
      <hr/>
      <h1>Contact</h1>
      <hr/>
      <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Edwards, CO</p>
      <p><FontAwesomeIcon icon={faEnvelopeSquare}/> chessjewelry@gmail.com</p>
      <p><FontAwesomeIcon icon={faFacebookSquare}/> https://facebook.com/chessjewelry</p>
      <p><FontAwesomeIcon icon={faInstagram} /> https://www.instagram.com/chessjewelry100/</p>
      </Col>
      </Row>
    </Container>
  );
}

export default ContactCard;