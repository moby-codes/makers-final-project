import React from 'react'
import { useState } from "react";
import { Container } from "react-bootstrap";
import Scoresheet from "./Scoresheet";

export const Question = ({currentQuestion, setCurrentQuestion, questions, showScore, setShowScore, score, setScore}) => {
  
  const [results] = useState([]);

  
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
      results.push(true); 
    }
    else {
      results.push(false);
    }
  

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setShowScore(true);
    }
  };
      
  return (
    <div>
    {showScore ? (
      <Container>
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
        <Scoresheet 
          results={results}
        />  
     
      </Container>
    ) : (
      <>
        <Container>
          <div className="quizQuestions">
            <div class="question-body card mb-3">
              <div class="custom-font-2 card-header">Question Number {currentQuestion + 1}</div>
              <div class="question-body card-body">
                <p class="question-padding custom-font-2 card-title">{questions[currentQuestion].questionText}</p>
                <div class="d-grid gap-2">
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button class="custom-font-2 btn btn-lg btn-primary" type="button" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    )}
    </div>
  )
}

export default Question;
