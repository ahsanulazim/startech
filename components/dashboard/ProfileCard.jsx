import { SiteContext } from "@/app/context/MyContext";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";

export default function ProfileCard() {

  const { currentUser } = useContext(SiteContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm items-center">
      <div className="card-body flex-row gap-5 justify-between items-center">
        <div>
          <h2 className="card-title">Hello</h2>
          <p>{currentUser ? currentUser.name : "User"}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
