import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import Footer from './components/footer'
import Header from './components/Header'
import Story from './components/Story'
import Question from './components/Question'

function App() {
  return (   
       <>
       <div className="title">
       <Container> 
          <h1> Quiz 1 </h1>
      </Container>
        </div>

        <Story />
        <Question />

        <div className="footer"><Footer /> </div>
       </>  
       
    );
}

export default App;
