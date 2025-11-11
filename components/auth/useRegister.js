import { AuthContext } from "@/context/AuthProvider";
import { apiGet, apiPost } from "@/lib/api/api";
import { auth } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function useRegister() {
  const router = useRouter();
  const userRegister = async (name, email, phone, google, password, setLoading) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const accessToken = await userCredential.user.getIdToken();

      //save user to mongodb
      await apiPost('/auth/login', { name, phone, google, accessToken });
      const status = await apiGet('/auth/status');
      if (status.authenticated) {
        // 4. Safe to navigate client-side
        setLoading(false);
        router.push('/dashboard');
      } else {
        setLoading(false);
        window.location.href = '/dashboard';
      }
    } catch (err) {
      alert(err);
    }
  }
  return { userRegister };
}
