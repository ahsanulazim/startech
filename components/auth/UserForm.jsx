"use client";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Activity, useState } from "react";
import { auth, google } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

export default function UserForm({ login }) {
  const [loading, setLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState(false);
  const router = useRouter();

  //login user logic

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrorMassage(false);
        setLoading(false);
        // Signed in
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        setLoading(false);
        setErrorMassage(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  //Register user logic

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setLoading(false);
        router.push("/dashboard");

        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  //handle Google Login

  const handleGoogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        router.push("/dashboard");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
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

  return (
    <div className=" bg-base-100 border-base-300 rounded-box w-full max-w-sm border p-4 mx-auto">
      <h1 className="text-center text-xl font-semibold text-main">
        {login ? "Log in" : "Register"}
      </h1>
      <div className="flex gap-3 mt-2">
        <button
          className="btn bg-white text-black border-[#e5e5e5] grow"
          onClick={handleGoogle}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
        </button>

        {/* Facebook */}
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8] grow">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="divider">or</div>
      <form
        className="fieldset"
        onSubmit={login ? (e) => handleLogin(e) : (e) => handleRegister(e)}
      >
        {!login && (
          <>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="Your Full Name"
              name="name"
              required
            />

            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              className="input w-full"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </>
        )}
        <label className="label" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          name="email"
          required
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          name="password"
          required
        />

        <Activity mode={errorMassage ? "visible" : "hidden"}>
          <div role="alert" className="alert alert-error mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Wrong Email/Password</span>
          </div>
        </Activity>

        <button type="submit" className="btn btn-neutral btn-filled-style mt-4">
          {login ? (
            loading ? (
              <>
                <span className="loading loading-spinner"></span> Log in
              </>
            ) : (
              "Log in"
            )
          ) : loading ? (
            <>
              <span className="loading loading-spinner"></span> Register
            </>
          ) : (
            "Register"
          )}
        </button>
        <p className="text-center text-sm">
          {login ? "Don't have an account? " : "Already have an account? "}
          <Link
            href={login ? "/register" : "/login"}
            className="font-semibold text-second"
          >
            {login ? "Register Now" : "Log in now"}
          </Link>
        </p>
      </form>
    </div>
  );
}
