import React from 'react'
import { Container } from 'react-bootstrap';
export const About = () => {
  return (
    <>
    <div className="about_us_title">
      <Container>
        <h1 data-testid="aboutTitle">Code4Fun</h1>
      </Container>
    </div>
    <Container>
        <h3 data-testid="aboutHeading1">Background:</h3>
    </Container>
    <div className="about_us_paragraph">
      <Container>
        <p>
          <h3 data-testid="aboutDetails">This app was created to develop a fun learning enviroment for kids. Introducing fundamental coding concepts, 
          Children can go through various quizzes and answer the given questions. With multiple themes to choose from, coding has never been this fun and simple before. Code4Fun, putting the FUN back into fundamental concepts</h3>
        </p>
      </Container>
    </div>
      <Container>
        <h2 data-testid="aboutHeading2">Founders:</h2>
          <p data-testid="aboutFounders">Mubashar Ali</p>
          <p>Ian King</p>
          <p>Ed Packard</p>
          <p>Graeme Stirling</p>
      </Container>
    </>
  )
}

export default About;
