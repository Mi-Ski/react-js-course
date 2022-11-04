import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings.jsx";

describe("Greeting component", () => {
  test("renders a greeting", () => {
    render(<Greetings />);
    const element = screen.getByText("Hello World", { exact: false });

    expect(element).toBeInTheDocument();
  });
	test("greeting is of type h2", () => {
		render(<Greetings />);

		expect(screen.getByRole("heading", { "level": 2})).toBeInTheDocument()
	});
});
