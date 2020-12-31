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
      <Row className='linksContainer'>
        <Col lg={8} className='homeLinks'>
          <div className='link'>Home</div>
          <div className='link'>About</div>
          <div className='link'>Shop</div>
          <div className='link'>Contact</div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeLogo;