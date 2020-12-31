import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Container>
      <Row className="aboutContainer">
        <Col lg={6}>
          <div className="imageDiv">
            <Image className="aboutImage" src="./images/About.JPG" fluid />
          </div>
        </Col>
        <Col lg={6}>
          <div className="infoDiv">
              My passion for mineralogy and gemology started in college when
              studying geology. While other geologists were looking for oil, I
              was rockhounding to find precious gems. This passion expanded into
              creating jewelry from gemstones I found or procured at various gem
              & mineral shows around the states.
              <br />
              <br />
              After retiring from teaching, I decided to turn my hobby
              into a new career! I completed a jewelry course at the New
              Approach School for Jewelers in order to fine-tune my skills to
              create beautiful, custom pieces.
              <br />
              <br />
              All of the jewelry showcased here is hand-crafted from start to
              finish in my small studio in Vail, CO. Not only do I cut the
              gemstones in-house, I also create custom settings utilizing
              various techniques.
              <br />
              <br />
              I look forward to creating a custom peice for you or a
              special someone, turning your vision into reality.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCard;
