import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "../assets/google.svg";
import GithubIcon from "../assets/github.svg";

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
    <div className='min-h-[100vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-black'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='font-normal text-2xl text-gray-900'>Welcome</p>

            <p className='font-light text-sm text-gray-600'>
              Log in to continue to DailyCode.
            </p>
            <button
              type='submit'
              className='w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 '
              onClick={() => onSignin()}
            >
              <img src={GoogleIcon} className='w-5 h-5 mr-2' />
              Continue with Google
            </button>
            <button
              className='w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 -mt-2'
            >
              <img src={GithubIcon} className='w-5 h-5 mr-2' />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
