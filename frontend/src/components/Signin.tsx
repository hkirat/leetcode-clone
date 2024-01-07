// Import necessary modules
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../App';
import { GoogleAuthProvider } from 'firebase/auth';
import GoogleIcon from '../assets/google.svg';
import GithubIcon from '../assets/github.svg';
import ParticleComponent from './ParticlesComponent';
import './signin-style.css';

const provider = new GoogleAuthProvider();

export const Signin = () => {


  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const user = result.user;
        console.log(user);
      })
      .catch(() => {
        alert('Error while signing in');
      });
  }

  return (
    <div className="flex font-mono">
      <div className="w-full md:w-2/5 flex justify-center items-center h-screen max-sm:hidden max-md:hidden"
           style={{ background : "black"}}
      >
        {/* Add an id to the particles container */}
        <div id="particles-js" className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center content">
            {/* <img src="/logo.jpg" alt="logo" className='reflect rounded-lg'/> */}
            <h2 className='text-7xl font-semibold text-white animate-charcter'>Daily Code</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-screen md:w-5/5 bg-gray-900 flex justify-center items-center">
        <ParticleComponent containerId='particle-container'/>
        <div className="w-full max-w-md" style={{ position : 'fixed', zIndex : 1}}>
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-1 text-white text-center">Log In</h2>
          </div>
          <div className="mb-4 justify-center sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="font-normal text-2xl text-gray-900">Welcome</p>
                  <p className="font-light text-sm text-gray-600">
                    Log in to continue to DailyCode.
                  </p>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2"
                    onClick={() => onSignin()}
                  >
                    <img src={GoogleIcon} className="w-5 h-5 mr-2" />
                    Continue with Google
                  </button>
                  <button
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border rounded font-light text-md hover:bg-gray-200 focus:outline-none focus:ring-2 -mt-2"
                  >
                    <img src={GithubIcon} className="w-5 h-5 mr-2" />
                    Continue with Github
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 text-center">
              <p className="text-gray-400">
                New to Neon? <a href="#" className="text-blue-500">Sign up for an account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
