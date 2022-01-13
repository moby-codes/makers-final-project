import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react";
import Story from "./Story";
import Question from "./Question";

export const QuizPage = ({currentQuiz, quizTitle, currentQuestion, setCurrentQuestion}) => {

  const [questions, setQuestions] = useState([]);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(process.env.REACT_APP_SERVER_URL + currentQuiz);
      setQuestions(result.data);
    }
    fetchData()
  }, [currentQuiz]);

  return (
    <>
      <div className="title"> <h1 class="custom-font-2"> {quizTitle} </h1> </div>
      { questions.length > 0 && 
          <Story 
          currentQuestion={currentQuestion}
          score={score}
          showScore={showScore}
          questions={questions} />
      }
      { questions.length > 0 &&
        <Question
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          showScore={showScore}
          setShowScore={setShowScore}
          score={score}
          setScore={setScore}
          questions={questions}/>
      }
    </>
  )
}

export default QuizPage;
