import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

export const footer = () => {
  return (
    <>
      <footer> 
        <Container>
          <Row>
            <Col className="text-center">
              <span id="custom-font-2">
                <p data-testid="footer">Copyright &copy; Code4Fun</p>
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default footer;