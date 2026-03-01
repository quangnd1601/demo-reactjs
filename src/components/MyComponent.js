// 1. class component
// 2. function component

import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Quang", age: "30" },
      { id: 2, name: "Beso", age: "32" },
      { id: 3, name: "Quang Beso", age: "21" },
    ],
  };
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    // DRY: don't repeat yourself
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
        <hr />
      </div>
    );
  }
}

export default MyComponent;
