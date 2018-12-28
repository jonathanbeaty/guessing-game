import React from "react";

import Header from "./header";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      guess: 0
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
      </div>
    );
  }
}
