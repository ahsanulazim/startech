import { AuthContext } from "@/context/AuthProvider";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function useRegister() {
  const router = useRouter();
  const { serverUrl } = useContext(AuthContext);

  const userRegister = async (
    name,
    email,
    phone,
    google,
    password,
    setLoading
  ) => {
    const emailRes = await fetch(`${serverUrl}/users/email/${email}`);

    if (!emailRes.ok) {
      const phoneRes = await fetch(`${serverUrl}/users/phone/${phone}`);
      if (!phoneRes.ok) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const userToken = userCredential.user.accessToken;
            // Signed up
            fetch(`${serverUrl}/users`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, phone, google, userToken }),
            })
              .then((res) => res.json())
              .then(() => {
                setLoading(false);
                router.push("/dashboard");
              })
            // ...
          })
          .catch((error) => {
            setLoading(false);
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
          });
      }
      else {
        setLoading(false);
        alert("Use Different Phone Number");
      }
    } else {
      setLoading(false);
      alert("Use another email");
    }
  };

  return { userRegister };
}
