import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header";
import QuizDashboard from "./components/QuizDashboard";
import home from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpaceQuiz from "./components/SpaceQuiz";
import About from "./components/About";
import Racecar from "./components/RaceCarQuiz";
import Fantasy from "./components/Fantasy";


export default function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
        </Container>

        <Container>
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/quiz-dashboard" component={QuizDashboard} exact />
            <Route path="/spacequiz" component={SpaceQuiz} exact />
            <Route path="/about" component={About} exact />
            <Route path="/racecarsquiz" component={Racecar} exact />
            <Route path="/fantasyquiz" component={Fantasy} exact />
          </Switch >
        </Container>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}
