import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  afterEach(cleanup);
  it("should render the Header component", () => {
    const { getByText, getByAltText } = render(<Header />);
    expect(getByText("Space War Character")).toBeInTheDocument();
    expect(getByAltText("Lightway logo")).toBeInTheDocument();
  });
});
