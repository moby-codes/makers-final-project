import React from 'react'

export const Scoresheet = ({results}) => {
console.log(results);

return (
  <>
  <h2> this is our scoresheet </h2>
  <p> Q1 {results.map((element, index) => { console.log(element) })} </p>
  </>
)
}

export default Scoresheet;



