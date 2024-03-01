import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("should have props value, width, height, spacing", () => {
  const height = 37,
    width = 37,
    spacing = 7;
  const { container } = render(
    <Star height={height} width={width} spacing={spacing} value={3.6}></Star>
  );
  const starYellow = "div.stars .star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
});
