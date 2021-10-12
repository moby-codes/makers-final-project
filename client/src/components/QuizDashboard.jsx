import React from 'react'
import { Container } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Title from "./Title"


const QuizDashboard = () => {

  return (
    <>

<div className="title">
        <Container>
          <Title />
        </Container>
      </div> 
      <Container>
        <h2 id="custom-font-2"> Welcome to the quizes. Choose which quiz  you would like to play below:</h2>
        </Container>


      <div className="qcard">
        <Container>
          <div class="card text-white bg-success mb-3">
            <div class="card-header custom-font-2">Theme: Space</div>
              <div class="card-body">
                <h4 class="card-title custom-font-2"><strong>Space Blast</strong></h4>
                <p class="card-text custom-font-2">Welcome to Space, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/spacequiz">
                  <div className="QcardButton">
                    <button type="button" class="custom-font-2 btn btn-warning">Take Quiz</button> 
                  </div> 
                </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header custom-font-2">Theme: Fairytales</div>
              <div class="card-body">
                <h4 class="card-title custom-font-2"><strong>Fairytail Quiz</strong></h4>
                <p class="card-text custom-font-2">details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/fairytalequiz">
                  <div className="QcardButton">
                    <button type="button" class="custom-font-2 btn btn-danger">Take Quiz</button> 
                  </div> 
                </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
      <Container>
      
          <div class="card text-white bg-warning mb-3">
            <div class="card-header custom-font-2">Theme: Jungle</div>
              <div class="card-body">
                <h4 class="card-title custom-font-2"><strong>Jungle Quiz</strong></h4>
                <p class="card-text custom-font-2">Welcome to the jungle, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/junglequiz">
                  <div className="QcardButton">
                    <button type="button" class="custom-font-2 btn btn-success">Take Quiz</button> 
                  </div>  
                </Link>
            </div>
          </div>
         
        </Container>
      </div>
    </>
  )
}

export default QuizDashboard;