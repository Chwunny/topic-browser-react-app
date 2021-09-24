import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  handleInput(value) {
    this.setState({ userInput: value });
  }
  isPalindrome(input) {
    let forwards = input;
    let backwards = input;

    backwards = backwards.split("").reverse().join("");

    forwards === backwards
      ? this.setState({ palindrome: "true" })
      : this.setState({ palindrome: "false" });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
