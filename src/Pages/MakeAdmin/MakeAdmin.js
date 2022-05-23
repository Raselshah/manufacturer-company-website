import React, { useState } from "react";
import { useQuery } from "react-query";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  console.log(users);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>
                  <button>Make Admin</button>
                  <button>Delete Admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
