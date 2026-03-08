import React from "react";
import "./DisplayInfo.scss"; /* style={{ color: "blue", paddingTop: "20px" }} */
import logo from "../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    const { listUsers } = this.props;
    return (
      <div className="display-info-container">
        <img src={logo}></img>

        <button onClick={() => this.handleShowHide()}>
          {this.state.isShowListUser === true
            ? "Hide List Users"
            : "Show List Users"}
        </button>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                  </div>
                  <button onClick={() => this.props.handleDelete(user.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
