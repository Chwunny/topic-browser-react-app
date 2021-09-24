import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  handleInput(value) {
    this.setState({ userInput: value });
  }

  filterInput(input) {
    let arr = this.state.unFilteredArray.filter((obj) =>
      Object.hasOwn(obj, input)
    );
    this.setState({ filteredArray: arr });
  }
  //prettier-ignore
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterInput(this.state.userInput);
          }}
        >Filter</button>
        <span className="resultsBox filterObjectPB"> Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterObject;
