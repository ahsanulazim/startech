import { SiteContext } from "@/app/context/MyContext";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function useLogin() {
  const [error, setError] = useState(false);
  const [googleUser, setGoogleUser] = useState();
  const { serverUrl, setCurrentUser } = useContext(SiteContext);
  const router = useRouter();

  const userLogin = async (email, password, setLoading) => {
    fetch(`${serverUrl}/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setGoogleUser(data.google);
      });
    if (googleUser) {
      setLoading(false);
      setError(true);
    }
  };

  // signInWithEmailAndPassword(auth, email, password)
  //   .then(() => {
  //     setErrorMassage(false);
  //     setLoading(false);
  //     // Signed in
  //     router.push("/dashboard");
  //     // ...
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     setErrorMassage(true);
  //     console.log(error);
  //   });

  useEffect(() => {
    console.log("Updated googleUser:", googleUser);
  }, [googleUser]);
  return { userLogin, error };
}
