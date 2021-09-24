import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  handleInputOne(value) {
    this.setState({ number1: value });
  }

  handleInputTwo(value) {
    this.setState({ number2: value });
  }

  findSum(input1, input2) {
    this.setState({ sum: parseInt(input1, 10) + parseInt(input2, 10) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleInputOne(e.target.value)}
        />
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleInputTwo(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.findSum(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
