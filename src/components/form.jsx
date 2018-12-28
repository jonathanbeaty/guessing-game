import React from "react";

export default function Form(props) {
  return (
    <form>
      <header>{props.header}</header>
      <input className="guess" placeholder="Enter your Guess" />
      <input type="submit" value="Guess" />
    </form>
  );
}
