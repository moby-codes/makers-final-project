import React from 'react'
import { useState } from "react";
import {dummyQ} from '../dummyQ.js'
import fetchData from '../dbquestions.js'
import QuizPage from './QuizPage'

export const FairyTale = () => {
   const quizTitle = useState('FairyTale Quiz')
   const currentQuiz = 'fairytale'
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [questions, setQuestions] = useState([dummyQ]);
  
  React.useEffect(() => {
    fetchData(currentQuiz).then(res => {
      setQuestions(res.data)
    })
  }, [] )

  return (
    <>
    <QuizPage
      quizTitle={quizTitle}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      questions={questions}
    />
    </>
  )
}

export default FairyTale;
