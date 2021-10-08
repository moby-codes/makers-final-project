import React from 'react'
import { Container } from "react-bootstrap";

const QuizCards = () => {

  

  return (
    <>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title">Quiz Name</h4>
                <p class="card-text">details about what you will learn / story</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title">Quiz Name</h4>
                <p class="card-text">details about what you will learn / story</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="qcard">
        <Container>
          <div class="card text-white bg-info mb-3">
            <div class="card-header">Story Header</div>
              <div class="card-body">
                <h4 class="card-title">Quiz Name</h4>
                <p class="card-text">details about what you will learn / story</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default QuizCards;