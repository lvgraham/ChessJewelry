import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactCard.css";

function ContactCard() {
  return (
    <Container className="contactCard">
      <Row>
        <Col md={12}>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> Vail, CO
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
            {" "}
            <a href="mailto:chessjewelry@gmail.com">chessjewelry@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            {" "}
            <a href="https://facebook.com/chessjewelry">Facebook</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            {" "}
            <a href="https://www.instagram.com/chessjewelry100/">Instagram</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactCard;
