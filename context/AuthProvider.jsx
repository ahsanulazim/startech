"use client";
import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const serverUrl = process.env.NEXT_PUBLIC_API_BASE;
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setCurrentUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        setCurrentUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });
    return () => observer();
  }, []);

  const userData = {
    currentUser,
    serverUrl,
    setCurrentUser,
    loading,
    setLoading,
  };

  return <AuthContext value={userData}>{children}</AuthContext>;
}
