"use client";

import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

export default function ProfileDropdown() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ul
      tabIndex="-1"
      className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
}
