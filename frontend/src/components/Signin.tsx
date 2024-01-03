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
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[30%] flex items-center justify-center text-4xl font-bold text-[#ededed] bg-[#131313]">
        <div>
          <h1>Set up serverless</h1>
          <h1>Postgres in seconds.</h1>
        </div>
      </div>
      <div className="w-[70%] bg-[#232323] text-white flex justify-center items-center text-start">
        <div>
          <div className="text-xl">Log In</div>
          <div className="text-xs mb-[30px] text-[#D3D3D3]">
            New to LeetCode? Sign up for an account
          </div>
          <div className="mb-4">
            <div className="text-sm text-[#D3D3D3] mb-1">Email</div>
            <input
              type="text"
              className="w-full border-gray-700 rounded-lg bg-black text-white outline-blue-500 h-[30px] px-[8px] py-1"
            />
          </div>
          <div className="mb-4">
            <div className="text-sm text-[#D3D3D3] mb-1">Password</div>
            <input
              type="text"
              className="w-full border-gray-700 rounded-lg bg-black text-white outline-blue-500 h-[30px] px-[8px] py-1"
            />
          </div>
          <button className="h-10 w-full bg-blue-500 rounded-full">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

// <button
//   onClick={() => {
//     onSignin();
//   }}
// >
//   Login with google
// </button>;
