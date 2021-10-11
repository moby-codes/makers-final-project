import React from 'react'
import { Container } from "react-bootstrap";
import { questions } from "../questions"

const Story = ({currentQuestion}) => {

  return (
    <>
      <div className="story-card">

    <Container>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{questions[currentQuestion].storyTitle}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{questions[currentQuestion].storySubtitle}</h6>
          {questions[currentQuestion].storyText.map((element) => (
            <p class="card-text">{element.text}</p>
	        ))}
      </div>
    </div>
    </Container>
    </div>
    </>
  )
}
export default Story;
