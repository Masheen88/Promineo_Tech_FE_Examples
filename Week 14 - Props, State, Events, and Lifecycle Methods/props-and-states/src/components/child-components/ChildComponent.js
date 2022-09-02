import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: this.props.parentName,
      childName: this.props.childName,
    };
  }
  render() {
    return (
      <div>
        <h1>This is passed from the {this.state.parentName} component</h1>
        <h2>{this.state.childName}</h2>
      </div>
    );
  }
}

export default ChildComponent;
