import React from 'react'
import { useState } from "react";
import Story from "./Story";
import Question from "./Question";


export const SpaceQuiz = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>

      <Story currentQuestion={currentQuestion} />

      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}/>
      


      
    </>
  )
}

export default SpaceQuiz;
