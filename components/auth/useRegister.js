import { AuthContext } from "@/context/AuthProvider";
import { auth } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function useRegister() {
  const { serverUrl } = useContext(AuthContext);

  const router = useRouter();
  const userRegister = async (
    name,
    email,
    phone,
    google,
    password,
    setLoading
  ) => {
    try {
      //Firebase User Register
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userID = user.uid;
      //Backend User Data Transfer
      const res = await fetch(`${serverUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, google, userID, email }),
      });
      const data = await res.json();
      setLoading(false);
      console.log(data);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };
  return { userRegister };
}
