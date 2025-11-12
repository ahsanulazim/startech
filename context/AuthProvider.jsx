"use client";
import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const serverUrl = process.env.NEXT_PUBLIC_API_BASE;
  const [currentUser, setCurrentUser] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  //User Observer

  useEffect(() => {
    const observer = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email;
        const res = await fetch(`${serverUrl}/users/email/${email}`);
        const data = await res.json();
        console.log(data);

        // fetch(`${serverUrl}/users/email/${email}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setCurrentUser(data);
        //         localStorage.setItem("user", JSON.stringify(data));
        //     })
        //     .catch((err) => {
        //         setCurrentUser(null);
        //         localStorage.removeItem("user");
        //     });
        // ...
      } else {
        alert("cannot get user");

        // User is signed out
        // ...
        // setCurrentUser(null);
        // localStorage.removeItem("user");
      }
      // setLoading(false);
    });
    return () => observer();
  }, []);

  const userData = {
    currentUser,
    serverUrl,
    setCurrentUser,
  };

  return <AuthContext value={userData}>{children}</AuthContext>;
}
