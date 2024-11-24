import React from "react";
import { permissions } from "../mockData";

const Permissions = () => {
  return (
    <div>
      <h2>Permissions</h2>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
