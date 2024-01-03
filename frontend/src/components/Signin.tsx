import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import Google from "../assets/search 1.png";
import Github from "../assets/github2.png";
import "./Signin.css";

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
    <div className="login">
      <div className="login-img sm:flex hidden">
        <div className="login-title">Learn with Fun</div>
        <div className="login-info">
          Solve Problems, Learn Data Structures and Algorithms, Prepare for
          Interviews, and more.
        </div>
      </div>
      <div className="login-data sm:w-[50%] w-full bgDoodle">
        <div className="login-data-cointainer">
          <div className="login-head">Create an Account</div>
          <div className="flex flex-col gap-4 items-center">
            <button className="flex justify-center items-center transition-all gap-3 bg-[#2577d5] hover:bg-[#2984ec] active:bg-[#195498] pt-2 pb-2 pl-4 pr-4 rounded-[200px]">
              <div className="w-[20px] h-[20px]">
                <img src={Google} alt="" />
              </div>{" "}
              Sign Up with Google
            </button>
            <button className="flex text-black justify-center items-center transition-all gap-3 bg-[#ebebebe6] hover:bg-[#ffffffed] active:bg-[#dcdcdccf] pt-2 pb-2 pl-4 pr-4 rounded-[200px]">
              <div className="w-[20px] h-[20px]">
                <img src={Github} alt="" />
              </div>{" "}
              Sign Up with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
