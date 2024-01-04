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
    <div className={`min-h-[100vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('/src/assets/walpaper.jpeg')]`}>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='w-[90%] bg-white mx-auto shadow rounded px-10 md:px-4 py-16'>
          <div className="flex items-center justify-center mb-8"><span className="font-extrabold text-4xl">Daily Code.</span></div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='font-light text-2xl text-gray-900'>Welcome</p>

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
