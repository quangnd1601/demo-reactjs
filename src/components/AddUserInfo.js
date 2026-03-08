import React, { useState } from "react";
// class AddUserInfo extends React.Component {
//   state = {
//     name: "Quang",
//     address: "TP.HCM",
//     age: 20,
//   };
//   //=============== this.setSTATE ==================
//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNew({
//       id: Math.floor(Math.random() * 100000 + 100) + "random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   // ====== Add New =====

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and My address is {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             onChange={(event) => this.handleOnChangeInput(event)}
//             type="text"
//             value={this.state.name}
//           />
//           <label>Your age: </label>
//           <input
//             onChange={(event) => this.handleOnChangeAge(event)}
//             type="text"
//             value={this.state.age}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfo = (props) => {
  // state = {
  //   name: "Quang",
  //   address: "TP.HCM",
  //   age: 20,
  // };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("TP.HCM");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNew({
      id: Math.floor(Math.random() * 100000 + 100) + "random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and My address is {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          onChange={(event) => handleOnChangeInput(event)}
          type="text"
          value={name}
        />
        <label>Your age: </label>
        <input
          onChange={(event) => handleOnChangeAge(event)}
          type="text"
          value={age}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
