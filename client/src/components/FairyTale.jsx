import React from 'react'
import { useState } from "react";
import Story from "./Story";
import Question from "./Question";


export const FairyTale = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <div className="title"> <h1> Goldilocks and the three hackers </h1> </div>
 
      <Story currentQuestion={currentQuestion} />

      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}/>
            
    </>
  )
}

export default FairyTale;
