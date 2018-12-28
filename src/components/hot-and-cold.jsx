import React from "react";

import Header from "./header";
import Form from "./form";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      guess: 0,
      header: "Make Your Guess!"
    };
  }

  updateInput() {
    this.setState({
      input: 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}
