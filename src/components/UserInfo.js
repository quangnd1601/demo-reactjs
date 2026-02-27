import React from "react";
class UserInfo extends React.Component {
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
  render() {
    return (
      <div>
        My name is {this.state.name} and My address is {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            onChange={(event) => this.handleOnChange(event)}
            type="text"
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
