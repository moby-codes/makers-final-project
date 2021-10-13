import React from 'react'
import { Container } from "react-bootstrap";

const Story = ({currentQuestion, questions, showScore}) => {

  return (
    
    <>
      <div className="story-card">  
    <Container>
      <div class="card bg-warning">
        <div class="card-body">
          <h4 class="custom-font-2 card-title">{questions[currentQuestion].storyTitle}</h4>
          <h6 class="custom-font-2 card-subtitle mb-2">{questions[currentQuestion].storySubtitle}</h6>
          {questions[currentQuestion].storyText.map((element) => (
            <p class="custom-font-2 card-text">{element.text}</p>
	        ))}
      </div>
    </div>
    </Container>
    </div>
    </>
  )
}
export default Story;
