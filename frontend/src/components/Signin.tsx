import { signInWithPopup } from "firebase/auth";
import { auth } from "../App";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "../assets/google.svg";
import GithubIcon from "../assets/github.svg";

const provider = new GoogleAuthProvider();

export const Signin = () => {

    async function onSignin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) {
                    return;
                }
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch(() => {
                alert("erorr while signing in");
            });


    }

    return (
        <div className="w-[100vw] h-[100vh] flex">
        <div className="w-[30%] flex items-center justify-center  text-[#ededed] bg-[#131313] max-sm:hidden">
          <div className="px-10">
            <h1 className="text-2xl font-bold">Struggle With Coding Problems ?</h1>
            <p className=" py-4"> Practice daily with this platform to upgrade the skills.</p>
          </div>
        </div>
        <div className="w-[70%] bg-[#232323] text-white flex justify-center items-center text-start max-sm:w-full">
          <div className="w-[350px]">
            <div className="text-xl">Log In</div>
            <div className="text-xs mb-[30px] text-[#D3D3D3]">
              New to Dailycode ? <span className="text-[#0d80f2]" >Sign up for an account</span>
            </div>
            <div className="mb-4">
              <div className="text-sm text-[#D3D3D3] mb-1">Email</div>
              <input
                type="text"
                className="w-full border-[#2E2E2E] border-2 rounded-lg bg-black text-white outline-blue-500 h-[40px] px-[8px] py-1"
              />
            </div>
            <div className="mb-4">
              <div className="text-sm text-[#D3D3D3] mb-1">Password</div>
              <input
                type="password" 
                className="w-full border-[#2E2E2E] border-2 rounded-lg bg-black text-white outline-blue-500 h-[40px] px-[8px] py-1"
              />
            </div>
            <button className="h-10 w-full bg-blue-500 rounded-full mb-8">
              Log In
            </button>
            <div className="flex items-center text-[#D3D3D3]">
              <hr className="w-[40%]" />
              <div className="px-3 text-sm">OR</div>
              <hr className="w-[40%]" />
            </div>
            <div className="mt-8 flex justify-around">
              <button
                onClick={() => {
                  onSignin();
                }}
              >
                <img
                  className="h-16 rounded-[50%]"
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="GitHub"
                />
              </button>
              <button
                onClick={() => {
                  onSignin();
                }}
              >
                <img
                  className="h-16 rounded-[50%]"
                  src="https://www.shutterstock.com/shutterstock/photos/2275269793/display_1500/stock-vector-google-popular-realistic-social-media-logotype-editorial-illustration-eps-2275269793.jpg"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => {
                  onSignin();
                }}
              >
                <img
                  className="h-16 rounded-[50%]"
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="GitHub"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}




