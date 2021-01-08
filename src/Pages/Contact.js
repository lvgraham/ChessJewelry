import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../Components/NavBar/NavBar";
import ContactHeader from "../Components/ContactCard/ContactHeader"
import ContactCard from "../Components/ContactCard/ContactCard"



function About() {
  return (
    <Container>
      <NavBar />
      <ContactHeader/>
      <ContactCard/>
    </Container>
  );
}

export default About;


// https://facebook.com/chessjewelry
// https://www.etsy.com/shop/ChessJewelry
// https://www.instagram.com/chessjewelry100/

//<a href="mailto:chessjewelry@gmail.com">