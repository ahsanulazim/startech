import { AuthContext } from "@/context/AuthProvider";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function useLogin() {
  const [errorMassage, setErrorMassage] = useState("");
  const { serverUrl } = useContext(AuthContext);
  const router = useRouter();

  const userLogin = async (email, password, setLoading, setError) => {
    try {
      const res = await fetch(`${serverUrl}/users/email/${email}`);
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
            .then((userCredential) => {
              // Signed in
              const userToken = userCredential.user.accessToken;
              document.cookie = `authToken=${userToken}; path=/`;
              setLoading(false);
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
