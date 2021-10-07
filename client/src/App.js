// import logo from "./logo.svg";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Story from "./components/Story";
import Question from "./components/Question";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <div className="title">
        <Container>
          <h1> Quiz </h1>
        </Container>
      </div>
      <Story currentQuestion={currentQuestion} />
      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <Footer />{" "}
    </>
  );
}
