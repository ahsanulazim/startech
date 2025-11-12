import { AuthContext } from "@/context/AuthProvider";
import { auth } from "@/lib/firebase/firebase";
import { useContext } from "react";

export default function useEmailVerification() {
  const { serverUrl, setCurrentUser } = useContext(AuthContext);

  const userEmail = async () => {
    await auth.currentUser.reload(); // Refresh user info
    const email = auth.currentUser.email;
    const isVerified = auth.currentUser.emailVerified;

    if (isVerified) {
      const idToken = await auth.currentUser.getIdToken();

      const res = await fetch(`${serverUrl}/users/email/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailVerified: true }),
      });

      if (res.ok) {
        const userRes = await fetch(`${serverUrl}/users/email/${email}`);
        const data = await userRes.json();
        setCurrentUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
    }
  };
  return { userEmail };
}
