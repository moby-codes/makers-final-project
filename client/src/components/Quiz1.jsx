import React from 'react'
import { useState } from "react";
import Story from "./Story";
import Question from "./Question";


export const Quiz1 = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>

      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}/>
      

      <Story currentQuestion={currentQuestion} />

      
    </>
  )
}

export default Quiz1;
