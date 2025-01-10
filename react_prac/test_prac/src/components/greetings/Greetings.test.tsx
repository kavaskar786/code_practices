import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";
describe("Greetings", () => {
  it("renders greetings", () => {
    render(<Greetings />);
    expect(screen.getByText("hello kavaskar")).toBeInTheDocument();
  });
  it("render a greetings with the prop", () => {
    render(<Greetings name="likitha" />);
    expect(screen.getByText("hello likitha")).toBeInTheDocument();
  });
});
