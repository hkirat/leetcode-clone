import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import { Row, Col } from "react-bootstrap";
import Google from "../images/google.jpg";

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
      <Row className="min-h-screen">
        <Col md={3} className="bg-black">
          <div className="md:min-h-screen text-white text-4xl font-bold d-flex align-items-center justify-content-center">
            <h1>Code Daily</h1>
          </div>
        </Col>
        <Col md={9} className="bg-gray-200">
          <div className="min-h-screen flex flex-col align-items-center justify-content-center">
            <div className="text-4xl mb-4">Login</div>
            <hr />
            <button
              onClick={() => {
                onSignin();
              }}
            >
              <img
                src={Google}
                alt="Sign in using google"
                width={50}
                className="rounded"
              />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
