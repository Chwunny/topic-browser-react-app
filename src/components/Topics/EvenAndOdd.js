import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleInput(value) {
    this.setState({ userInput: value });
  }

  assignEvensAndOdds(input) {
    let arr = input.split(",");
    let evens = [];
    let odds = [];

    arr.forEach((e) => {
      e % 2 === 0 ? evens.push(parseInt(e, 10)) : odds.push(parseInt(e, 10));
    });
    console.log("evens:", evens, "odds:", odds);
    this.setState({ evenArray: evens, oddArray: odds });
  }
  //prettier-ignore
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          type=""
          className="inputLine"
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvensAndOdds(this.state.userInput);
          }}
        >Split</button>
        <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
