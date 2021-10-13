import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";


test("renders App and navigates to About page when clicked", () => {
  render(<App />);
  fireEvent.click(screen.getByText('About'))
  const aboutEl = screen.getByTestId("aboutTitle")
  
  expect(aboutEl.textContent).toBe("About")
});


