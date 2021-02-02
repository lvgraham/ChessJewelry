import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from '../Components/NavBar/NavBar'
import AboutCard from '../Components/AboutCard/AboutCard'

function About() {
  return (
    <Container>
      <NavBar />
      <AboutCard />
      {console.log('about.js is working')}
    </Container>
  );
}

export default About;
