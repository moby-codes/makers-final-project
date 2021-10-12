import React from 'react'
// import { useState } from "react";
import Story from "./Story";
import Question from "./Question";

export const QuizPage = ({quizTitle, currentQuestion, questions, setCurrentQuestion}) => {

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

export default QuizPage;
