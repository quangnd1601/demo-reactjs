import React from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    const { listUsers } = this.props; // Object
    // props => viết tắt properties (tài sản)
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayInfo;
