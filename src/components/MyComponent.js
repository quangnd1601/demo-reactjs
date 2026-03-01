// 1. class component
// 2. function component

import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    const myAge = ["a", "b", "C"];
    return (
      <div>
        <UserInfo></UserInfo>
        <br /> <br />
        <DisplayInfo name="Quang1" age={myAge}></DisplayInfo>
        <DisplayInfo name={"BESO"} age={20}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
