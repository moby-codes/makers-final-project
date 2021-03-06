import React from 'react'
import { Link } from 'react-router-dom'

export const Scoresheet = ({results}) => {

return (
  <>
  <div className="score-section">  
  <h2 id="custom-font-2"> Here's how you did: </h2>
  <br />
  {results.map((element, index) => 
    { return element ? (
      <h3 class="custom-font-2">Question {index +1}: Correct - congratulations!</h3>
    ) : (
      <h3 class="custom-font-2">Question {index +1}: Bad luck - try again next time</h3>
    )}
  )}
    <Link to='/quiz-dashboard'>
        <div className='returnButton'>
          <br />
          <button class="button-bg" type="button"> Return to Quizzes </button>
        </div>
    </Link>
  </div>
  </>
)
}
export default Scoresheet;



