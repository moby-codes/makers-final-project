import React from 'react'
import { useState } from "react";
import QuizPage from './QuizPage'

export const Fantasy = () => {
   const quizTitle = useState('Fantasy Quiz')
   const currentQuiz = 'fantasy'
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

export default Fantasy;