import React from 'react'
import { useState } from "react";
import QuizPage from './QuizPage'

export const SpaceQuiz = () => {
   const quizTitle = useState('A voyage to the Moon')
   const currentQuiz = 'space'
   const [currentQuestion, setCurrentQuestion] = useState(0);
  
  return (
    <>
    <QuizPage
      currentQuiz={currentQuiz}
      quizTitle={quizTitle}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
    />
    </>
  )
}

export default SpaceQuiz;
