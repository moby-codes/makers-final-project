import React from 'react'
import { useState } from "react";
import QuizPage from './QuizPage'

export const Racecar = () => {
   const quizTitle = useState('Racecar Quiz')
   const currentQuiz = 'racecars'
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

export default Racecar;