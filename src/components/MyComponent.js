// 1. class component
// 2. function component

import { type } from "@testing-library/user-event/dist/type";
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Quang",
    address: "TP.HCM",
    age: 20,
  };
  //=============== this.setSTATE ==================
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  // ========================== RENDER ============================
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    return (
      <div>
        My name is {this.state.name} and My address is {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input onChange={(event) => this.handleOnChange(event)} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
