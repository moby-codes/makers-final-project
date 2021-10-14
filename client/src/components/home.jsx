import React from 'react'
import { Container } from 'react-bootstrap'
import img3 from '../images/teaching.png'
import Title from "./Title"
import 'animate.css';

export const home = () => {
  return (
    <>
      <div className="title">
        <Container>
          <Title />
        </Container>
      </div> 

      
      <div className="image3">
      <img src={img3} alt="code4fun teaching"/>
      </div>
      
    <div className="homepagetxt" class="mb-0"> 
      <Container>
        <p>Code4Fun is an interactive quiz that Kids can use to learn coding. We are language Agnostic and you can enjoy a bunch of basic coding principles through our dynamic quiz. New themes are being added to our quiz regularly and we are always updating to make it up to date at all times</p>
      </Container>
    </div>

    <br />
    <br />

  <Container>
  <div className="quote-one">
    <figure>
      <blockquote class="blockquote">
        <p class="mb-0">The best enviroment for any child to learn the basic coding principles</p>
      </blockquote>
        <figcaption class="blockquote-footer">
        Co-Founder  <cite title="Source Title">Mubashar Ali</cite>
        </figcaption>
    </figure>
  </div>
  </Container>


  <Container>
    <div className="quote-one">
      <figure class="text-center">
        <blockquote class="blockquote">
         <p class="mb-0">I'm on my way to build my own facebook!</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Eoin, 8, <cite title="Source Title">London</cite>
        </figcaption>
      </figure>
    </div>
  </Container>

  <Container>
    <div className="quote-one">
      <figure class="text-end">
        <blockquote class="blockquote">
          <p class="mb-0">I absolutely loved the quiz and learnt alot</p>
        </blockquote>
          <figcaption class="blockquote-footer">
          Leo, 6, <cite title="Source Title">From London</cite>
      </figcaption>
    </figure>
    </div>
  </Container>


    </>
  )
}
export default home;
