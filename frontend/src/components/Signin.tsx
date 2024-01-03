import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const actionCodeSettings = {
// URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:5173',
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
            }).catch((error) => {
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
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-500 to-neutral-900">
        <div className="w-[30%] flex items-center justify-center relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 mt-4 ml-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="Logo"
              className="h-80 w-80"
            />
            <h1 className="text-3xl font-bold mb-2 text-center text-cyan-50">
              LeetClone Serverless Arch <br /> built on firebase
            </h1>
          </div>
          <div className="border-r border-gray-400 h-full mx-4"></div>
        </div>
  
        <div className="bg-white p-8 rounded shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="Logo"
            className="mx-auto mb-4 h-16"
          />
  
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Welcome Back!
          </h1>
          <button
            onClick={() => {
              onSignin();
            }}
            className="bg-neutral-500 hover:bg-neutral-800 text-white py-2 px-4 rounded-full w-full"
          >
            <span className="flex items-center justify-center">
              Login with Google
            </span>
          </button>
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                onSignin();
              }}
              className="bg-white p-2 rounded-full"
            >
              <img src="../public/google.png" alt="Google" className="h-8 w-8" />
            </button>
            <button
              onClick={() => {
                onSignin();
              }}
              className="bg-white p-2 rounded-full"
            >
              <img src="../public/github.png" alt="GitHub" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    );
  };