import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const handleUserInfo = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phoneNumber = event.target.phoneNumber.value;
    console.log(email, name, address, phoneNumber);
    const userInfo = { email, name, address, phoneNumber };
    fetch(`http://localhost:5000/userInfo/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("successfully update information");
        event.target.reset();
      });
  };
  return (
    <div className="mt-12">
      <h2 className="text-4xl text-center text-accent mb-2">Your Profile</h2>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <div class="card-body">
          <form onSubmit={handleUserInfo} className="flex flex-col gap-2">
            <div class="form-control">
              <input
                name="email"
                value={user?.email}
                readOnly
                disabled
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                name="name"
                value={user?.displayName}
                disabled
                readOnly
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                name="address"
                placeholder="Address"
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
