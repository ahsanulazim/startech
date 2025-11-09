import { SiteContext } from "@/app/context/MyContext";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function useLogin() {
  const [errorMassage, setErrorMassage] = useState("");
  const { serverUrl, setCurrentUser } = useContext(SiteContext);
  const router = useRouter();

  const userLogin = async (email, password, setLoading, setError) => {
    try {
      const res = await fetch(`${serverUrl}/users/${email}`);
      if (!res.ok) {
        //When there are no user
        // handle 404 or other errors gracefully
        setLoading(false);
        setError(true);
        setErrorMassage("User not found! Register Now");
      } else {
        //when there's an user
        const user = await res.json();

        if (user.google) {
          setLoading(false);
          setError(true);
          setErrorMassage("Use Google to Log in");
        } else {
          setError(false);
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              setLoading(false);
              // Signed in
              router.push("/dashboard");
              // ...
            })
            .catch((error) => {
              setLoading(false);
              setError(true);
              setErrorMassage("Password do not match!");
            });
        }
      }
    } catch (err) {
      // fallback UI if product not found or API fails
      alert(err);
    }
  };
  return { userLogin, errorMassage };
}
