import React from "react";

const User = ({ details }) => {
  return (
    <div>
      <h2>Name: {details.name}</h2>
      <p>Email: {details.email}</p>
    </div>
  );
};

export default User;
