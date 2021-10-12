import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react";
import Story from "./Story";
import Question from "./Question";

export const QuizPage = ({currentQuiz, quizTitle, currentQuestion, setCurrentQuestion}) => {

  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:5000/" + currentQuiz);
      setQuestions(result.data);
    }
    fetchData()
  }, [currentQuiz]);

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
