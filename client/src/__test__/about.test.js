import { render } from "@testing-library/react";
import About from "../components/About";

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

