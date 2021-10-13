import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

export const footer = () => {
  return (
    <>
      <footer> 
        
          <Row>
            <Col className="footer">
              <span id="custom-font-2">
                <p data-testid="footer">Copyright &copy; Code4Fun</p>
              </span>
            </Col>
          </Row>
        
      </footer>
    </>
  )
}

export default footer;