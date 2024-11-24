import React, { useState } from "react";
import { roles } from "../mockData";

const Roles = () => {
  const [roleList, setRoleList] = useState(roles);

  return (
    <div>
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
