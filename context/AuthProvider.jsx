'use client'
import { auth } from "@/firebase/firebase";
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
        const observer = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const email = user.email;

                fetch(`${serverUrl}/users/email/${email}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setCurrentUser(data);
                        localStorage.setItem("user", JSON.stringify(data));
                    })
                    .catch((err) => {
                        setCurrentUser(null);
                    });
                // ...
            } else {
                // User is signed out
                // ...
                setCurrentUser(null);
            }
            // setLoading(false);
        });
        return () => observer();
    }, []);

    const userData = {
        currentUser,
        serverUrl
    }

    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    )
}
