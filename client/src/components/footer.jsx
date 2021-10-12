import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

export const footer = () => {
  return (
    <>
      <footer> 
        <Container>
          <Row>
            <Col className="footer">
              <span id="custom-font-2">
                Copyright &copy; Code4Fun
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default footer;