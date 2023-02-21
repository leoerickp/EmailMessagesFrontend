import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ButtonBackLogin } from "../../src/components/ButtonBackLogin";

describe("<ButtonBackLogin/> test", () => {
  test("should be show Back Login", () => {
    render(<ButtonBackLogin />);
    expect(screen.getByText("Back Login")).toBeTruthy();
  });
});
