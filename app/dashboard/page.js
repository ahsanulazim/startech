"use client";

import { useContext, useEffect } from "react";
import { SiteContext } from "../context/MyContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function Dashboard() {
  const router = useRouter();
  const { currentUser } = useContext(SiteContext);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return <div>loading...</div>;
  }

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
    <div>
      dashboard
      <button className="btn btn-error" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
