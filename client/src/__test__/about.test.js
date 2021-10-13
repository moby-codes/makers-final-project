import { render } from "@testing-library/react";
import About from "../components/About";

// beforeEach(() => {
//    const component = render(<About />);
// });
// first test is verifying about page for the content that we expect it to have. 

test("renders title", () => {
  const component = render(<About />);
  const aboutEl = component.getByTestId("aboutTitle")
  expect(aboutEl.textContent).toBe("About")
});

test("renders headings", () => {
  const component = render(<About />);
  const backEl = component.getByTestId("aboutHeading1")
  const backEl2 = component.getByTestId("aboutHeading2")
  expect(backEl.textContent).toBe("Background:")
  expect(backEl2.textContent).toBe("Founders:")
});


test("renders details about app", () => {
  const component = render(<About />);
  const backEl = component.getByTestId("aboutDetails")
  expect(backEl.textContent).toContain("This app was created")
});


test("renders the names of the founders", () => {
  const component = render(<About />);
  const backEl = component.getByTestId("aboutFounders")
  expect(backEl.textContent).toContain("Ali")
});



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
