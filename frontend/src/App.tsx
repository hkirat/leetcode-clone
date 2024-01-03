import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import './App.css';
import { Card } from './components/Card';
import { Landing } from './components/Landing';
import { Signin } from './components/Signin';
import { SubmissionActivity } from "./components/SubmissionActivity";
import { SubmissionActivityList } from "./components/SubmissionActivityList";
import { Topbar } from './components/Topbar';
import { userAtom } from './store/atoms/user';

const firebaseConfig = {
  apiKey: "AIzaSyAjjsbl9eSDWSmfrWpFPap2uGuwONZ2N4g",
  authDomain: "leetcode-clone-c39eb.firebaseapp.com",
  projectId: "leetcode-clone-c39eb",
  storageBucket: "leetcode-clone-c39eb.appspot.com",
  messagingSenderId: "66814187798",
  appId: "1:66814187798:web:a6b3702e191448722dd837",
  measurementId: "G-ET5FNB5WCN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
function App() {
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot> 
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
      } else {
        setUser({
          loading: false,
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, [])


 const submissions = [
   { Name: 'John', position: 1, time: '10:00', answerIsCorrect: true, username: 'test' },
   { Name: 'John', position: 1, time: '10:00', answerIsCorrect: true, username: 'test' },
   { Name: 'John', position: 1, time: '10:00', answerIsCorrect: true, username: 'test' }
    // Add more submissions as needed
];

  if (user.loading) {
    return <div>loading ...</div>
  }
  
  // if (!user.user) {
  //   return <div><Signin /></div>
  // }
  
  return (
    <div className="place-items-center grid"> 
      <div className="max-w-screen-lg w-full">
        <Topbar />
        <Card><SubmissionActivityList submissions={submissions} /></Card>
      </div>
    </div>
  )
}

export default App
