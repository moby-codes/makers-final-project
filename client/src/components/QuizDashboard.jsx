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
        <h2> Welcome to the quizes. Choose which quiz  you would like to play below:</h2>
        </Container>


      <div className="qcard">
        <Container>
          <div class="card text-white bg-success mb-3">
            <div class="card-header">Theme: Space</div>
              <div class="card-body">
                <h4 class="card-title font-family: arial">Space Blast</h4>
                <p class="card-text">Welcome to Space, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/spacequiz"><button type="button" class="btn btn-info">Take Quiz</button> </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header">Theme: Fairytales</div>
              <div class="card-body">
                <h4 class="card-title">Fairytail Quiz</h4>
                <p class="card-text">details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/fairytalequiz"><button type="button" class="btn btn-info">Take Quiz</button> </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
      <Container>
      
          <div class="card text-white bg-warning mb-3">
            <div class="card-header">Theme: Jungle</div>
              <div class="card-body">
                <h4 class="card-title">Jungle Quiz</h4>
                <p class="card-text">Welcome to the jungle, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <Link to="/junglequiz"><button type="button" class="btn btn-info">Take Quiz</button> </Link>
            </div>
          </div>
         
        </Container>
      </div>
    </>
  )
}

export default QuizDashboard;