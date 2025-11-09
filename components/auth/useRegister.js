import { SiteContext } from "@/app/context/MyContext";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function useRegister() {
  const router = useRouter();
  const { serverUrl } = useContext(SiteContext);

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
        fetch(`${serverUrl}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, google }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              // Send data to Firebase
              createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                  // Signed up
                  setLoading(false);
                  router.push("/dashboard");

                  // ...
                })
                .catch((error) => {
                  setLoading(false);
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                });
            } else {
              setLoading(false);
              alert("Failed to add user");
            }
          })
          .catch(() => {
            setLoading(false);
            alert("Server error");
          });
      } else {
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
