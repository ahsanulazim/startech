import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import React from "react";

export default function ProfileCard({ user }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm items-center">
      <div className="card-body flex-row gap-5 justify-between items-center">
        <div>
          <h2 className="card-title">Hello</h2>
          <p>{user.name ? user.name : "User"}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
