import React from 'react'
import { Container } from "react-bootstrap";

export const Question = () => {
  return (
    <>
      <div className= "story-question"> 
<Container>
  <div class="card border-primary mb-3">
  <div class="card-header">Question title</div>
  <div class="card-body">
    <h4 class="card-title">Question text lorem ipsum blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h4>
    <div class="d-grid gap-2">
    <button class="btn btn-lg btn-primary" type="button">Question 1 button to select</button>
    <button class="btn btn-lg btn-primary" type="button">BQuestion 2 button to select</button>
    <button class="btn btn-lg btn-primary" type="button">Question 3 button to select</button>
    <button class="btn btn-lg btn-primary" type="button">Question 4 button to select</button>
    </div>

  </div>
</div>
</Container>
</div>

    </>
  )
}

export default Question;
