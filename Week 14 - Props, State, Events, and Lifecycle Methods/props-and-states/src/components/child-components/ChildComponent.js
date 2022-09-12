import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: this.props.parentName,
      childName: this.props.childName,
      myId: this.props.id,
      myChildFunction: this.props.myFunction,
    };
  }
  render() {
    return (
      <div>
        <h1>This is passed from the {this.state.parentName} component</h1>
        <h2>{this.state.childName}</h2>
        <p>{this.state.myId}</p>
        <button
          onClick={() => {
            this.state.myChildFunction({
              child: this.state.childName,
              childID: this.state.myId,
            });
          }}
        >
          Hello
        </button>
        <button
          onClick={() => {
            this.props.deleteChild(this.state.childName);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ChildComponent;
