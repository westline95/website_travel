import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width+ spacing;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width  + (index * spacing),
          height: height,
          width: width
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) 
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{ left: leftPos, height: height, width: decimals * width}}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`star-placeholder-${index}`}
        style={{
          left: index * width + (index * spacing),
          height: height,
          width: width
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
