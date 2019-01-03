import React from "react";
import Status from "./status";

import "./form.css";

export default function Form(props) {
  const { statement, guessCount } = props;
  return (
    <section>
      <form>
        <Status statement={statement} guessCount={guessCount} />
        <input className="guess" placeholder="Enter your Guess" />
        <input className="guess-button" type="submit" value="Guess" />
        <p>Guess: {guessCount}</p>
      </form>
    </section>
  );
}
