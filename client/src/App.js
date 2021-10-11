// import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header"
// import Title from "./components/Title"
import QuizDashboard from "./components/QuizDashboard"
import home from "./components/home"
import {BrowserRouter as Router, Route} from "react-router-dom"
import SpaceQuiz from "./components/SpaceQuiz"
import About from "./components/About"
import Jungle from "./components/Jungle"
import FairyTale from "./components/FairyTale"


export default function App() {
 

  return (
    <>
    <Router>

      <Container> 
        <Header />
      </Container>

      {/* <div className="title">
        <Container>
          <Title />
        </Container>
      </div> */}

      <Container> 
        <Route path="/signin" component={home} exact />
        <Route path="/" component={QuizDashboard} exact />
        <Route path="/spacequiz" component={SpaceQuiz} exact />
        <Route path="/about" component={About} exact />
        <Route path="/junglequiz" component={Jungle} exact />
        <Route path="/fairytalequiz" component={FairyTale} exact />

        
      </Container> 
      <footer className="footer--pin"> <Footer /> </footer>

      </Router>
    </>
  );
}
