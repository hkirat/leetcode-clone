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

    return <div>
        <div className="h-screen md:flex bg-gray-900 text-white">
            <div className="flex w-full md:w-1/2 justify-around py-10 items-center bg-gradient-to-tr from-purple-800 to-indigo-900">
                <div>
                    <img src="../../public/logo.png" alt="Daily Code Logo" className="h-16 mb-4" />
                    <h1 className="text-white font-bold text-4xl font-sans">Daily Code</h1>
                    <p className="text-white mt-1">A New Way to Learn</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-gray-800">
                <div className="bg-gray-800">
                    <h1 className="text-gray-300 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-500 mb-7">Welcome Back</p>
                    <button onClick={() => { onSignin() }} type="submit" className="block w-full bg-indigo-600 mt-4 py-2 px-4 rounded-2xl text-white font-semibold mb-2">
                        Login with Google
                    </button>
                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password?</span>
                </div>
            </div>
        </div>

    </div>
}