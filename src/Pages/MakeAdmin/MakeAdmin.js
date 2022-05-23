import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>loading...</p>;
  }

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("successfully admin added");
        refetch();
      });
  };

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
                  <div className="flex flex-row justify-center items-center gap-2">
                    {user.role !== "admin" ? (
                      <button
                        onClick={() => makeAdmin(user?.email)}
                        class="btn btn-xs"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button disabled class="btn btn-xs">
                        Already Admin
                      </button>
                    )}
                    <button class="btn btn-xs">Remove Admin</button>
                  </div>
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
