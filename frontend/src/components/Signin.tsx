import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import { app } from "../utils/firebase";

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5173',
    // This must be true.
    handleCodeInApp: true,
  };

export const Signin = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");

    async function onSignin() {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                alert("sent email")
                // ...
            })
            .catch((error) => {
                alert("sent not sent")
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    
    }
    
    return <div>
        <input type="text" placeholder="email" onChange={(e) => {
            setEmail(e.target.value);
        }}>
        </input>
        <button onClick={() => {
            onSignin()
        }}>
            Signup
        </button>
    </div>
}