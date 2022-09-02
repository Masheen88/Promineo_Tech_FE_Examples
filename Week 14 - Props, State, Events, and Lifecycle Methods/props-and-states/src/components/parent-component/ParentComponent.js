import React from "react";
import ChildComponent from "../child-components/ChildComponent";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      parentName: "Parent",
      // childName1: "Child1",
      // childName2: "Child2",
      childNames: [],
    };
  }

  //pass child name to child component
  myFUnction(child) {
    console.log("child:", child); //logs child name to console
  }

  //increase id by 1
  increaseId() {
    this.setState({
      id: this.state.id + 1, //sets the state of id to the current id + 1
    });

    console.log("Id before re-render +:", this.state.id); //logs id to console before re-rendering
  }
  decreaseId() {
    this.setState({
      id: this.state.id - 1, //sets the state of id to the current id - 1
    });

    console.log("Id before re-render -:", this.state.id); //logs id to console before re-rendering
  }

  deleteChild(child) {
    console.log("child:", child); //logs child name to console
    let newChildNames = this.state.childNames.filter(function (item) {
      //filter childNames array to remove child
      return item !== child; //returns all items that are not equal to child
    });

    this.setState({
      childNames: newChildNames, //set state of childNames to newChildNames
    });
  }

  render() {
    console.log("Id first and consequent re-renders:", this.state.id); //logs id to console after re-rendering
    return (
      <div>
        <h1>{this.state.parentName}</h1> {/* displays parent name */}
        <h2>{this.state.id}</h2> {/* displays id */}
        <button onClick={() => this.increaseId()}>Increase Id +</button>
        <button onClick={() => this.decreaseId()}>Decrease Id -</button>
        {/*button that increases id by 1 */}
        {/* push additional child to state array each time id is increased */}
        <br />
        <button
          onClick={() =>
            this.setState({
              childNames: [
                ...this.state.childNames,
                //increase id by 1 each time button is clicked
                `Child ${this.state.id} inside state Array`,
              ],
            })
          }
          // condition to prevent duplicate child with same id
          // if childNames includes childName, disable button
          disabled={this.state.childNames.includes(
            `Child ${this.state.id} inside state Array`
          )}
        >
          Add More Child Components
        </button>
        {/* loop through each component and create a child component */}
        {this.state.childNames.map((child, index) => {
          return (
            <ChildComponent
              key={index}
              childName={child}
              parentName={this.state.parentName}
              myFUnction={(child) => this.myFUnction(child)}
            />
          );
        })}
      </div>
    );
  }
}

export default ParentComponent;
