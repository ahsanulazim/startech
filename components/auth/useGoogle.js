import { SiteContext } from "@/app/context/MyContext";
import { auth, google } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function useGoogle() {
  const { serverUrl, setCurrentUser } = useContext(SiteContext);
  const router = useRouter();

  const handleGoogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const email = user.email;
        fetch(`${serverUrl}/users/email/${email}`)
          .then(async (res) => {
            if (res.status === 404) {
              // User not found, create
              const createUser = await fetch(`${serverUrl}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email,
                  name: user.displayName,
                  phone: user.phoneNumber,
                  google: true,
                }),
              });
              return await createUser.json();
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setCurrentUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/dashboard");
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return { handleGoogle };
}
