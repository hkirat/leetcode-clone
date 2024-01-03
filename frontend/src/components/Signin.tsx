import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import logo from "../assets/leetcode.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import backdrop from "../assets/backdrop.png";

const provider = new GoogleAuthProvider();

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5173",
  // This must be true.
  handleCodeInApp: true,
};

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className="flex w-full">
      <div className="w-[30rem] hidden md:flex">
        <img src={backdrop} alt="" />
      </div>
      <div className="h-screen flex flex-1 justify-center items-center ">
        <div className="flex flex-col items-center w-80 sm:w-96 border rounded-xl px-6 py-6">
          <img src={logo} alt="" className="h-16 mb-4" />
          <div className="text-4xl font-bold mb-4">Sign in</div>
          <input
            type="text"
            placeholder="Email"
            className="input mb-4 border p-2 rounded-md w-full mx-8"
          />
          <input
            type="password"
            placeholder="Password"
            className="input mb-4 border p-2 rounded-md w-full mx-8"
          />
          <button className="flex justify-center items-center bg-black text-white px-6 py-2 rounded-lg mb-3 mt-2">
            Sign In
          </button>
          <div>
            Do not have an account?{" "}
            <a className="text-[#FFA123]" href="/signup">
              Sign up
            </a>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full my-2">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <div className="mx-4">or</div>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            <div className="flex space-x-4 justify-between items-center mb-3">
              <button className="rounded-full p-1 border">
                <img src={google} alt="Google" className="h-10 w-10" />
              </button>
              <button className="rounded-full p-1 border">
                <img src={github} alt="Github" className="h-10 w-10" />
              </button>
            </div>
          </div>
          <div className="mt-3">
            <p className="flex justify-center items-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
