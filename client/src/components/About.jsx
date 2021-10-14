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
          <h3 data-testid="aboutDetails" id="about-page-non-title"> This app was created to provide a fun learning environment for children to learn fundamental coding concepts. 
          Children using this site can choose from various themed stories to guide them in developing their coding knowledge. The stories also include quizzes to test their understanding and boost their confidence. With several themes to choose from, covering a wide variety of coding concepts, coding has never been this fun and simple before.</h3>
        </p>
      </Container>
    </div>

      <div className="aboutusquote"> </div>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p class="mb-0">Code4Fun, putting the FUN into coding fundamental concepts!</p>
        </blockquote> 
      </figure>


      <div className="founders">
        <Container>
        <h3 data-testid="aboutHeading2" id="about-page-title"><strong>Founders:</strong></h3>
        <p data-testid="aboutFounders" id="about-page-non-title">Mubashar Ali, Ian King, Ed Packard, Graeme Stirling</p>
        </Container>
      
      </div>

    </>
  )
}

export default About;
