// 1. class component
// 2. function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Quang",
    address: "TP.HCM",
    age: 20,
  };
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    return (
      <div>
        My name is {this.state.name} and My address is {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
