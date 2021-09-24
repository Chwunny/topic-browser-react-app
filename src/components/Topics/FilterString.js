import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  handleInput(value) {
    this.setState({ userInput: value });
  }

  filterInput(input) {
    let test = this.state.unfilteredArray;
    let arr = test.filter((e) => e.includes(input));

    this.setState({ filteredArray: arr });
  }
  //prettier-ignore
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"></span>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterInput(this.state.userInput)}
        >Filter</button>
        <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterString;
