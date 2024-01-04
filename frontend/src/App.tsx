import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";
import { Topbar } from "./components/Topbar";
import { ProblemList } from "./components/ProblemList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Landing } from "./components/Landing";
import { Submissions } from "./components/Sumissions";
import { Problem } from "./components/Problem";

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
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  const problemList = [
    {
      id: "1",
      problemName: "Two Sum",
      tags: ["Array", "Hash Table"],
      description: " Let there be a set of N natural numbers 1,2,3,4...N. We are allowed to insert + or − sign in front of each number and add all the resultant numbers. The minimum non-­negative value obtained is denoted as D(N).Find the value of D(1)+D(2)+...+D(19216812112)"
    },
    {
      id: "2",
      problemName: "Reverse String",
      tags: ["String"],
      description: "Write a function that reverses a string. Do it in-place without allocating extra space."
    },
    {
      id: "3",
      problemName: "Palindrome Check",
      tags: ["String"],
      description: "Determine whether an input string is a palindrome. Consider only alphanumeric characters and ignore cases."
    },
    {
      id: "4",
      problemName: "Merge Intervals",
      tags: ["Array", "Sorting"],
      description: "Given a collection of intervals, merge any overlapping intervals."
    },
  ];

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
      <Router>
        <Topbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Submissions />} />
            <Route path="/problems" element={<ProblemList problemList={problemList} />} />
            <Route path="/problems/:id" element={<Problem problemList={problemList} />} />
          </Routes>
        </Router>
        {/* <Leaderboard /> */}
        {/* <Leaderboard leaderboard={leaderboardData} /> */}
      </div>
    </div>
  );
}

export default App;
