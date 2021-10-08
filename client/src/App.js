// import logo from "./logo.svg";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Story from "./components/Story";
import Question from "./components/Question";
import Header from "./components/Header"
//import {} from "react-router-bootstrap"
import Title from "./components/Title"

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <Container> <Header /> </Container>
      <div className="title">
        <Container>
          <Title />
        </Container>
      </div>
     
      <Footer />{" "}
    </>
  );
}
