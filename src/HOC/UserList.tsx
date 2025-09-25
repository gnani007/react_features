import React from "react";

interface UserListProps {
  users: string[];
}

function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default UserList;
