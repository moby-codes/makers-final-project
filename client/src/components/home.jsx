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
      
    <div className="homepagetxt"> 
      <Container>
        <p>Code4Fun is an interactive quiz app to help children learn coding. It is language agnostic and children will experience key coding concepts through our dynamic story-based quizzes. New themes are regularly added to the quiz. Fly your rocket to the moon, control a racing car computer, or defeat the evil wizard today!</p>
      </Container>
    </div>

    <br />
    <br />

  <Container>
  <div className="quote-one">
    <figure>
      <blockquote class="blockquote">
        <p>The best enviroment for any child to learn the basic coding principles</p>
      </blockquote>
        <figcaption class="blockquote-footer">
        Code4Fun co-founder  <cite title="Source Title">Mubashar Ali</cite>
        </figcaption>
    </figure>
  </div>
  </Container>


  <Container>
    <div className="quote-one">
      <figure class="text-center">
        <blockquote class="blockquote">
         <p class="mb-0">I'm on my way to building my own Facebook thanks to Code4Fun!</p>
        </blockquote>
        <figcaption class="blockquote-footer">
        Eóin, 8, <cite title="Source Title">London</cite>
        </figcaption>
      </figure>
    </div>
  </Container>

  <Container>
    <div className="quote-one">
      <figure class="text-end">
        <blockquote class="blockquote">
          <p class="mb-0">I absolutely loved the quiz and learned a lot</p>
        </blockquote>
          <figcaption class="blockquote-footer">
          Léo, 6, <cite title="Source Title">London</cite>
      </figcaption>
    </figure>
    </div>
  </Container>


    </>
  )
}
export default home;
