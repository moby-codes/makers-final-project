import React from 'react'
import { useState, useEffect } from "react";
import Story from "./Story";
import Question from "./Question";
import fetchData from '../dbquestions.js'

export const QuizPage = ({currentQuiz, quizTitle, currentQuestion, setCurrentQuestion}) => {

  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetchData(currentQuiz).then(res => {
      setQuestions(res.data)
    })
  }, [] )

  return (
    <>
      <div className="title"> <h1> {quizTitle} </h1> </div>
      { questions.length > 0 && 
          <Story currentQuestion={currentQuestion}
          questions={questions} />
      }
      { questions.length > 0 &&
        <Question
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questions={questions}/>
      }
    </>
  )
}

export default QuizPage;
