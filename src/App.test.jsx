// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, test, expect } from "vitest";
// import "@testing-library/jest-dom/vitest";

// import App from "./App";

// describe("App Component", () => {
//   test("should display count 0 initially", () => {
//     render(<App />);

//     expect(screen.getByText("0")).toBeInTheDocument();
//   });

//   test("should increase count when Click button is clicked", () => {
//     render(<App />);

//     const button = screen.getByRole("button", {
//       name: "Click",
//     });

//     fireEvent.click(button);

//     expect(screen.getByText("1")).toBeInTheDocument();
//   });
// });

import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, test, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

import App from "./App";

afterEach(() => {
  cleanup();
});

describe("App Component", () => {

  test("should display count 0 initially", () => {
    render(<App />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("should increase count when Click button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: "Click",
    });

    fireEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

});