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
    <div>
      <div className="flex w-full items-center">
        <div className="my-20">
          <img
            src="https://img.freepik.com/premium-vector/boy-coding-with-laptop-illustration_418302-2379.jpg"
            alt="Coding Boy"
          />
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-bold mb-4">The Best Coding Platform</h1>
          <img
            src="https://console.neon.tech/resources/ndms4/login/custom-theme/img/github.svg"
            alt="GitHub Logo"
          />

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
