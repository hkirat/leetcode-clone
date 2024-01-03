import { getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import logo from "../assets/leetcode.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import { Separator } from "./ui/separator";

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
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="h-screen flex justify-center items-center">
      <Card className="flex flex-col items-center w-96">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>
            <img src={logo} alt="logo" width={50} height={50} />
          </CardTitle>
          <CardDescription>BEATCODE</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 w-full items-center">
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button className="mt-4" disabled={isLoading} onClick={onSignin}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign in
          </Button>
          <Label>
            Do not have an account?{" "}
            <a className="text-[#FFA123]" href="/signup">
              Sign up
            </a>
          </Label>
        </CardContent>
        <div className="flex space-x-4 justify-between items-center mb-3">
          <Button variant="outline" size="icon" className="rounded-full p-1">
            <img src={google} alt="Google" className="h-10 w-10" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full p-1">
            <img src={github} alt="Github" className="h-10 w-10" />
          </Button>
        </div>
        <Separator className="mx-3" />
        <CardFooter className="mt-3">
          <p className="flex justify-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
