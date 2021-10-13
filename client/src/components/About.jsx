import React from 'react'
import { Container } from 'react-bootstrap';
export const About = () => {
  return (
    <>
    <div className="about_us_title">
      <Container>
        <h1 data-testid="aboutTitle" id="custom-font-2"><strong>About</strong></h1>
      </Container>
    </div>
    <Container>
        <h3 data-testid="aboutHeading1" id="about-page-title"><strong>Background:</strong></h3>
    </Container>
    <div className="about_us_paragraph">
      <Container>
        <p>
          <h3 data-testid="aboutDetails" id="about-page-non-title"> This app was created to develop a fun learning environment for kids to learn basic coding fundamental concepts. 
          Kids are free to pick and choose various fun themed stories that guide them in developing their coding knowledge. The stories contain fun quizzes that aim to test their understanding and bolster their confidence. With loads of themes to choose from, covering a wide variety of coding concepts, coding has never been this fun and simple before. <strong>Code4Fun</strong>, putting the FUN into coding fundamental concepts, for kids!</h3>
        </p>
      </Container>
    </div>
      <Container>
        <h3 data-testid="aboutHeading2" id="about-page-title"><strong>Founders:</strong></h3>
          <p data-testid="aboutFounders" id="about-page-non-title">Mubashar Ali, Ian King, Ed Packard, Graeme Stirling</p>
      </Container>
    </>
  )
}

export default About;
