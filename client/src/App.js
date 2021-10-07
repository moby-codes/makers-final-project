// import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Story from "./components/Story";
import Question from "./components/Question";

export default function App() {
  return (
    <>
      <div className="title">
        <Container>
          <h1> Quiz </h1>
        </Container>
      </div>
      <Story />

      <Question />
      <div className="footer">
        <Footer />{" "}
      </div>
    </>
  );
}
