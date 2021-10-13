import React from 'react'
import { useState } from "react";
import QuizPage from './QuizPage'

export const FairyTale = () => {
   const quizTitle = useState('FairyTale Quiz')
   const currentQuiz = 'fairytale'
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

export default FairyTale;