import { render } from "@testing-library/react";
import Footer from "../components/footer";



test("renders Footer", () => {
  const component = render(<Footer />);
  const aboutEl = component.getByTestId("footer")
  expect(aboutEl.textContent).toContain("Copyright")
  
});

