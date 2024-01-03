import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  TwitterIcon,
} from "../assets/icons";

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
    <>
      <section className="min-h-screen flex items-stretch text-white">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in a unique way, anywhere.
            </p>
          </div>
          {/* Social media icons */}
          {/* ... */}
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20 ">
            <h3 className=" text-4xl text-indigo-500">Hey Login here</h3>

            <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <button
                onClick={onSignin}
                className="px-4 pb-2 mt-4 pt-4 w-full bg-white border border-indigo-500 rounded-lg flex items-center justify-center gap-4"
              >
                <GoogleIcon />
                <span className=" font-semibold tracking-wide bg-white text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </button>
              <button className="px-4 pb-2 mt-4 pt-4 w-full bg-white border border-indigo-500 rounded-lg flex items-center justify-center gap-4">
                <GithubIcon />
                <span className=" font-semibold tracking-wide bg-white text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Github
                </span>
              </button>
              <p className="text-gray-400 text-sm mt-4 w-3/4 mx-auto">
                By proceeding, you agree to our Terms of Use and confirm you
                have read our Privacy and Cookie Statement.
              </p>
            </div>
            {/* Mobile social media icons */}
            {/* ... */}
          </div>
        </div>
      </section>
    </>
  );
};
