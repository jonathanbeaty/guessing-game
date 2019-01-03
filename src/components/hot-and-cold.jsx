import React from "react";

import Header from "./header";
import Form from "./form";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      guessCount: 0,
      statement: "Make Your Guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      input: "",
      guessCount: 0,
      statement: "Make Your Guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  updateInput() {
    this.setState({
      input: 1
    });
  }

  render() {
    const { statement, guessCount } = this.state;
    return (
      <div>
        <Header />
        <Form statement={statement} guessCount={guessCount} />
      </div>
    );
  }
}
