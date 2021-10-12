import React from 'react'
import { Container } from 'react-bootstrap';
export const About = () => {
  return (
    <>
    <div className="about_us_title">
      <Container>
        <h1 id="custom-font-2"><strong>About</strong></h1>
      </Container>
    </div>
    <Container>
        <h3 id="about-page-title"><strong>Background:</strong></h3>
    </Container>
    <div className="about_us_paragraph">
      <Container>
        <p>
          <h3 id="about-page-non-title"> This app was created to develop a fun learning enviroment for kids. Introducing fundamental coding concepts, 
          Children can go through various quizzes and answer the given questions. With multiple themes to choose from, coding has never been this fun and simple before. Code4Fun, putting the FUN back into fundamental concepts</h3>
        </p>
      </Container>
    </div>
      <Container>
        <h3 id="about-page-title"><strong>Founders:</strong></h3>
          <p id="about-page-non-title">Mubashar Ali, Ian King, Ed Packard, Graeme Stirling</p>
      </Container>
    </>
  )
}

export default About;
