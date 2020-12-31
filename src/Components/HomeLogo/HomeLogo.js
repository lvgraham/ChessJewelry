import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './HomeLogo.css'

function HomeLogo() {
  return(
    <Container>
      <Row className='homeImage'>
        <Col lg={8}>
          <Image src='./images/chessjewelry.png' fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default HomeLogo;