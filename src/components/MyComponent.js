// 1. class component
// 2. function component

import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {
  // JSX: chỉ trả về 1 phần tử thôi
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
      </div>
    );
  }
}

export default MyComponent;
