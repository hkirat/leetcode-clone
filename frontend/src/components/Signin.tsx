import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";

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
    <div className="h-screen flex items-center justify-center">
      <div className=" sm:hidden lg:block ">
        <img
          src="https://img.freepik.com/premium-vector/boy-coding-with-laptop-illustration_418302-2379.jpg"
          alt="Coding Boy"
          className="w-full rounded-xl"
        />
      </div>
      <div className="bg-gray-300 sm:w-full lg:w-[900px] h-full flex flex-col justify-center p-16 ">
        <h1 className="m-10 text-4xl text-center font-bold mb-6 text-indigo-700">
          <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Code,
          </span>
          <span className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
            Repeat,
          </span>
          <span className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            Sleap
          </span>
        </h1>

        <div className="bg-gray-100 p-8 rounded-xl flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">The Best Coding Platform</h1>
          <h1 className="text-blue-500 font-semibold mb-6">
            New here? Sign up for an account
          </h1>
          <div className="flex space-x-2">
            <img
              className="w-10 cursor-pointer"
              src="https://console.neon.tech/resources/ndms4/login/custom-theme/img/github.svg"
              alt="GitHub Logo"
            />
            <img
              onClick={() => onSignin()}
              src="https://console.neon.tech/resources/ndms4/login/custom-theme/img/google.svg"
              className="w-10 cursor-pointer"
              alt="Google Logo"
            />
            <img
              src="https://console.neon.tech/resources/ndms4/login/custom-theme/img/hasura.svg"
              className="w-10 cursor-pointer"
              alt="Hasura Logo"
            />
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Start Coding
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
