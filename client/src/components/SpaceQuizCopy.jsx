import React from 'react'
import { useState } from "react";
import Story from "./Story";
import Question from "./Question";
import {dummyQ} from '../dummyQ.js'
import fetchData from '../dbquestions.js'

export const SpaceQuiz = () => {
   const quizTitle = 'A voyage to the Moon'
   const currentQuiz = 'space'
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [questions, setQuestions] = useState([dummyQ]);
  
  React.useEffect(() => {
    fetchData(currentQuiz).then(res => {
      setQuestions(res.data)
    })

  }, [] )

  return (
    <>
      <div className="title"> <h1> {quizTitle} </h1> </div>
 
      <Story currentQuestion={currentQuestion}
      questions={questions} />

      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questions={questions}/>
    </>
  )
}

export default SpaceQuiz;
