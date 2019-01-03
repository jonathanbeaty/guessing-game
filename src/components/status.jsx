import React from "react";

export default function Status(props) {
  const key = props.guessCount;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }

  return (
    <h2
      key={key}
      id="statement"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.statement} {guessAgain}
    </h2>
  );
}
