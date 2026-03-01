import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "Quang",
    address: "TP.HCM",
    age: 20,
  };
  //=============== this.setSTATE ==================
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and My address is {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            onChange={(event) => this.handleOnChangeInput(event)}
            type="text"
            value={this.state.name}
          />
          <label>Your age: </label>
          <input
            onChange={(event) => this.handleOnChangeAge(event)}
            type="text"
            value={this.state.age}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
