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
    <main className="bg-white centered">
      <div className="flex justify-between items-center flex-row-reverse">
        <div className="bordercolor lg:mr-16 xl:mr-40 p-4 lg:p-8 rounded-lg modalWidth">
          <div className="mb-4 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
            <p className="text-sm">
              Unlock the door to your personalized experience!
            </p>
          </div>
          <div className="flex items-center gap-2 w-full ">
            <button
              onClick={onSignin}
              className="inline-flex gap-2 items-center justify-center w-full whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                className="size-5"
              />
              Google
            </button>

            <div className="seperatorColor h-5 w-0.5 rounded" />

            <button className="inline-flex gap-2 items-center justify-center w-full whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                className="size-5 mix-blend-multiply"
              />
              Github
            </button>
          </div>
          <div className="mt-4">
            <p className="text-zinc-500 text-sm font-medium dark:text-zinc-400 max-w-[37ch] text-center leading-5 mx-auto">
              By logging in, you accept our
              <a className="text-blue-500 hover:text-blue-700" href="#">
                {" "}
                terms{" "}
              </a>
              and
              <a className="text-blue-500 hover:text-blue-700" href="#">
                {" "}
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1703700414421-fccc37e07836?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-dvh "
          />
        </div>
      </div>
      {/* <button onClick={() => {
            onSignin()
        }}>
            Login with google
        </button> */}
    </main>
  );
};
