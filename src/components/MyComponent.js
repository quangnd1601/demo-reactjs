// 1. class component
// 2. function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Quang",
    address: "TP.HCM",
    age: 20,
  };
  handleMouseOver = (event) => {
    return console.log(event.pageY);
  };
  handleClick = (event) => {
    console.log("My name is", this.state.name);
  };
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    return (
      <div>
        My name is {this.state.name} and My address is {this.state.address}
        <button
          onClick={(event) => {
            return this.handleClick(event);
          }}
        >
          Click Me
        </button>
        <button
          onMouseOver={(event) => {
            return this.handleMouseOver(event);
          }}
        >
          Hover Me
        </button>
      </div>
    );
  }
}

export default MyComponent;
