import React from 'react'

export const Scoresheet = ({results}) => {

return (
  <>
  <h2> How did you do? </h2>
  <div>
  {results.map((element, index) => 
    { return element ? (
      <p>Question {index +1}: Correct!</p>
    ) : (
      <p>Question {index +1}: Bad luck - try again next time</p>
    )}
  )}
  </div>
  </>
)
}
export default Scoresheet;



