import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading.js";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const { isLoading, error, data } = useQuery("userInfo", () =>
    fetch(`http://localhost:5000/userInfo/${user.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  const { name, email, address, phoneNumber } = data;
  return (
    <div>
      <div className="card w-96 mx-auto mt-12 bg-slate-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{address}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
