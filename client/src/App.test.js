import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kids Coding Quiz/i);
  expect(linkElement).toBeInTheDocument();
});

test("when user clicks on correct answer, score should increment", () => {
  const result = render(<App />);
  const answerButton = result.container.querySelector("#answer2");
  let scoreKeeper = result.container.querySelector("#score_keeper");
  act(() => {
    answerButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(scoreKeeper.getAttribute("data-score")).toEqual("1");
});

test("when user clicks on wrong answer, score should NOT increment", () => {
  const result = render(<App />);
  const answerButton = result.container.querySelector("#answer0");
  let scoreKeeper = result.container.querySelector("#score_keeper");
  act(() => {
    answerButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(scoreKeeper.getAttribute("data-score")).toEqual("0");
});
