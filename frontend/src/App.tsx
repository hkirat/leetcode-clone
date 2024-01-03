import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import './App.css';
import { Card } from './components/Card';
import { Landing } from './components/Landing';
import { Signin } from './components/Signin';
import { Topbar } from './components/Topbar';
import { userAtom } from './store/atoms/user';

const firebaseConfig = {
  apiKey: "AIzaSyBp36r4pKHtr5vTXJF1as-HqZCvHnxFe9A",
  authDomain: "toptal-b252d.firebaseapp.com",
  databaseURL: "https://toptal-b252d.firebaseio.com",
  projectId: "toptal-b252d",
  storageBucket: "toptal-b252d.appspot.com",
  messagingSenderId: "721127361937",
  appId: "1:721127361937:web:d9223765565381c26f1e30",
  measurementId: "G-X4BYY4B0BS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
function App() {
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, [])

  if (user.loading) {
    return <div>loading ...</div>;
  }
  
  if (!user.user) {
    return <div><Signin /></div>
  }
  
  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar />
        <Card>hi there</Card>
      </div>
    </div>
  );
}

export default App;
