import React from "react";

const UserList = ({ name, img }) => {
  return (
    <div className="user__profile">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <button>View Profile</button>
    </div>
  );
};

export default UserList;
