import { render } from "@testing-library/react";
import About from "../components/About";

// first test should verify navbar loads(header) and that Code4Fun and about are displayed 

test("renders title", () => {
  const component = render(<About />);
  const aboutEl = component.getByTestId("aboutTitle")
  
  expect(aboutEl.textContent).toBe("Code4Fun")
});

test("renders headings", () => {
  const component = render(<About />);
  const backEl = component.getByTestId("aboutHeading1")
  const backEl2 = component.getByTestId("aboutHeading2")
  expect(backEl.textContent).toBe("Background:")
  expect(backEl2.textContent).toBe("Founders:")
  
});











// second test should verify about link renders a new view 

// check quiz card and button have loaded on main page 

// Scenario: Opened quiz 
// User clicks correct answer check score value is incremented  
// User clicks wrong answer check score value is unchanged 

// Once user completes quiz, score is displayed 






















// test("when user clicks on correct answer, score should increment", () => {
//   const result = render(<App />);
//   const answerButton = result.container.querySelector("#answer2");
//   let scoreKeeper = result.container.querySelector("#score_keeper");
//   act(() => {
//     answerButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(scoreKeeper.getAttribute("data-score")).toEqual("1");
// });

// test("when user clicks on wrong answer, score should NOT increment", () => {
//   const result = render(<App />);
//   const answerButton = result.container.querySelector("#answer0");
//   let scoreKeeper = result.container.querySelector("#score_keeper");
//   act(() => {
//     answerButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(scoreKeeper.getAttribute("data-score")).toEqual("0");
// });
