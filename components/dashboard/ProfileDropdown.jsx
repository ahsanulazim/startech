"use client";

import { AuthContext } from "@/context/AuthProvider";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaRightFromBracket, FaSliders, FaUser } from "react-icons/fa6";

export default function ProfileDropdown() {
  const { currentUser } = useContext(AuthContext);

  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ul
      tabIndex="-1"
      className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow"
    >
      <li>
        <div className="flex flex-col items-start gap-0">
          <h2 className="font-semibold text-lg">{currentUser?.name}</h2>
          <p className="opacity-45">{currentUser?.email}</p>
        </div>
      </li>
      <div className="divider my-0"></div>
      <li>
        <Link href="/dashboard/profile" className="">
          <FaUser />
          Profile
          <span className="badge badge-sm bg-second text-white">New</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings">
          <FaSliders /> Settings
        </Link>
      </li>
      <li>
        <button onClick={handleLogout} className="text-error">
          <FaRightFromBracket />
          Logout
        </button>
      </li>
    </ul>
  );
}
