import React from 'react'
import { Container } from 'react-bootstrap'
import Test from '../images/test.jpg'
import Title from "./Title"

export const home = () => {
  return (
    <>
      <div className="title">
        <Container>
          <Title />
        </Container>
      </div> 

    <div className="homepagetxt"> 
      <Container>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </Container>
    </div>
    <br />


    <figure class="text-end">
  <blockquote class="blockquote">
    <p class="mb-0">The best enviroment for any child to learn the basic coding principles</p>
  
  </blockquote>
  <figcaption class="blockquote-footer">
    Co-Founder  <cite title="Source Title">Mubashar Ali</cite>
  </figcaption>
</figure>
    <section className="image1">
      <Container>
      <img src={Test} />
      </Container>
    </section>
    <br />
    <div class="col-sm-12 section-heading">
    <Container>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Container>
    </div>
    

    </>
  )
}
export default home;
