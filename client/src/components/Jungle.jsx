import React from 'react'
import { useState } from "react";
import QuizPage from './QuizPage'

export const Jungle = () => {
   const quizTitle = useState('Jungle Quiz')
   const currentQuiz = 'jungle'
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

export default Jungle;