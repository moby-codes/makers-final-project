// import logo from "./logo.svg";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
// import Story from "./components/Story";
// import Question from "./components/Question";
import Header from "./components/Header"
import Title from "./components/Title"
import QuizCards from "./components/QuizCards"
import home from "./components/home"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Quiz1 from "./components/Quiz1"

export default function App() {
 // const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
    <Router>

      <Container> 
        <Header />
      </Container>

      <div className="title">
        <Container>
          <Title />
        </Container>
      </div>

      <Container> 
        <Route path="/" component={home} exact />
        <Route path="/quiz" component={QuizCards} exact />
        <Route path="/quiz1" component={Quiz1} exact />
      </Container> 
      <Footer />

      </Router>
    </>
  );
}
