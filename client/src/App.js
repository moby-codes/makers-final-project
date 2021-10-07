// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";


export default function App() {
  const questions = [
    {
      questionTitle: "Question title goes here",
      questionContext: "Question context here",
      questionText: "Name the blue bear to be Max",
      answerOptions: [
        { answerText: "blue bear = max", isCorrect: false },
        { answerText: "bule-bear = max", isCorrect: false },
        { answerText: "blue_bear = max", isCorrect: true },
        { answerText: "red_bear= max", isCorrect: false },
      ],
    },
    {
      questionTitle: "Question title goes here",
      questionContext: "Question context here",
      questionText: "Question goes here",
      answerOptions: [
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: true },
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: false },
      ],
    },
    {
      questionTitle: "Question title goes here",
      questionContext: "Question context here",
      questionText: "Question goes here",
      answerOptions: [
        { answerText: "answer", isCorrect: true },
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: false },
      ],
    },
    {
      questionTitle: "Question title goes here",
      questionContext: "Question context here",
      questionText: "Question goes here",
      answerOptions: [
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: false },
        { answerText: "answer", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="container text-center bg-primary">
            <Card style={{ width: "auto" }} className="mx-auto">
              <Card.Header className="bg-light">Kids Coding Quiz</Card.Header>
              <Card.Body>
                <div className="question-section">
                  <div
                    className="question-count"
                    id="score_keeper"
                    data-score={score}
                  >
                  <span>Question {currentQuestion + 1}</span>/
                  {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionTitle}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionContext}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={"answer" + index}
                    id={"answer" + index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
