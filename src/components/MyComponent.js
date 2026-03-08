// 1. class component
// 2. function component

import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Quang", age: "12" },
//       { id: 2, name: "Beso", age: "32" },
//       { id: 3, name: "Quang Beso", age: "21" },
//     ],
//   };
//   handleAddNew = (userObj) => {
//     setState({ listUsers: [userObj, ...this.state.listUsers] });
//     console.log(userObj);
//   };
//   handleDelete = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((value, index) => {
//       return value.id != userId;
//     });
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   // JSX: chỉ trả về 1 phần tử thôi
//   render() {
//     // DRY: don't repeat yourself
//     return (
//       <React.Fragment>
//         <div className="a">
//           <AddUserInfo handleAddNew={this.handleAddNew}></AddUserInfo>
//           <br />
//           <DisplayInfo
//             listUsers={this.state.listUsers}
//             handleDelete={this.handleDelete}
//           ></DisplayInfo>
//         </div>
//         <div className="b"></div>
//       </React.Fragment>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Quang", age: "12" },
    { id: 2, name: "Beso", age: "32" },
    { id: 3, name: "Quang Beso", age: "21" },
  ]);
  // state = {
  //   listUsers: [
  //     { id: 1, name: "Quang", age: "12" },
  //     { id: 2, name: "Beso", age: "32" },
  //     { id: 3, name: "Quang Beso", age: "21" },
  //   ],
  // };

  const handleAddNew = (userObj) => {
    // this.setState({ listUsers: [userObj, ...this.state.listUsers] });
    // console.log(userObj);
    let listUsersClone = [userObj, ...listUsers];
    setListUsers(listUsersClone);
  };
  const handleDelete = (userId) => {
    // let listUsersClone = [...this.state.listUsers];
    // listUsersClone = listUsersClone.filter((value, index) => {
    //   return value.id != userId;
    // });
    let listUsersClone = listUsers.filter((item) => item.id != userId);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
    setListUsers(listUsersClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNew={handleAddNew}></AddUserInfo>
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDelete={handleDelete}
        ></DisplayInfo>
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
