import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <button onClick={() => this.handleShowHide()}>
          {this.state.isShowListUser === true
            ? "Hide List Users"
            : "Show List Users"}
        </button>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // render() {
  //   console.log(this.props);
  //   const { listUsers } = this.props; // Object
  //   // props => viết tắt properties (tài sản)
  //   return (
  //     <div>
  //       {listUsers.map((user) => {
  //         return (
  //           <div key={user.id}>
  //             <div>My name's {user.name}</div>
  //             <div>My age's {user.age}</div>
  //             <hr />
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }
}
export default DisplayInfo;
