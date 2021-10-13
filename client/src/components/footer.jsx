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