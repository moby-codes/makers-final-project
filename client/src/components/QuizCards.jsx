import React from 'react'
import { Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const QuizCards = () => {

  

  return (
    <>

      <Container>
        <h2> Welcome to the quizes. Choose which quiz  you would like to play below:</h2>
        </Container>


      <div className="qcard">
        <Container>
          <div class="card text-white bg-success mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title font-family: arial">Space Quiz</h4>
                <p class="card-text">Welcome to Space, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <button type="button" class="btn btn-info">Take Quiz</button>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title">Fairytail Quiz</h4>
                <p class="card-text">details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
                <button type="button" class="btn btn-warning">Take Quiz</button>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
      <Container>
      <LinkContainer to="/quiz1">
          <div class="card text-white bg-warning mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title">Jungle Quiz</h4>
                <p class="card-text">Welcome to the jungle, you will learn about Arrays. details about what you will learn / story, details about what you will learn / story, details about what you will learn / story</p>
            </div>
          </div>
          </LinkContainer>
        </Container>
      </div>
    </>
  )
}

export default QuizCards;