import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from '../Components/NavBar/NavBar'
import AboutCard from '../Components/AboutCard/AboutCard'

function About() {
  return (
    <Container>
      <NavBar />
      <AboutCard />
    </Container>
  );
}

export default About;
