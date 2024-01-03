import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import googleLogo from "../assets/google.svg";

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
    <div className="flex h-screen w-screen ">
      {/* Left Section - High Tech Image */}
      {/* <div className="flex-1 w-full bg-gradient-to-r from-black to-green-500"> */}
        {/* You can replace the image URL below with your high tech image */}
        {/* <img
          src="../assets/google.svg"
          alt="High Tech Image"
          className="w-full h-full object-cover"
        /> */}
      {/* </div> */}

      <div className="flex-1 flex items-center justify-center bg-gray-700">
        <div className="bg-gray-800 p-5 shadow-md rounded-md w-full max-w-md text-white flex flex-col items-center justify-center">
          <div className="mb-5 float-left text-left">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Login</h2>
              <span className="text-white pr-2">New to dailycode?</span>
              <span className="text-blue-600">Signup</span>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-gray-400">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="text-sm text-gray-400">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              // onClick={handleSignIn}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
          <button
            onClick={() => onSignin()}
            className="flex items-center justify-center text-white mt-5 rounded-md focus:outline-none"
          >
            <img src={googleLogo} alt="Google Logo" className="h-5 w-5 mr-2" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};
