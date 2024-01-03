import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";
import { Topbar } from "./components/Topbar";
import { Card } from "./components/Card";
import { Leaderboard } from "./components/LeaderBoard";
import { ProblemList } from "./components/ProblemList";

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

  const leaderboardData = [
    { id: 1, icon: "", name: "Siddharth", points: 23 },
    { id: 1, icon: "", name: "Ayush", points: 43 },
    { id: 1, icon: "", name: "KKumar", points: 231 },
    { id: 1, icon: "", name: "FEFE", points: 213 },
    { id: 1, icon: "", name: "Jannat", points: 23 },
    { id: 1, icon: "", name: "Siddharth", points: 34 },
    { id: 1, icon: "", name: "Siddharth", points: 2344 },
  ];

  const problemList = [
    { id: 1, problemName: "Two Sum", tags: ["Array", "Hash Table"] },
    { id: 2, problemName: "Reverse String", tags: ["String"] },
    { id: 3, problemName: "Palindrome Check", tags: ["String"] },
    { id: 4, problemName: "Merge Intervals", tags: ["Array", "Sorting"] },
    { id: 5, problemName: "Linked List Cycle", tags: ["Linked List"] },
    { id: 6, problemName: "Binary Search", tags: ["Array"] },
    { id: 7, problemName: "Tree Traversal", tags: ["Tree"] },
    { id: 8, problemName: "Graph Connectivity", tags: ["Graph"] },
    {
      id: 9,
      problemName: "Dynamic Programming",
      tags: ["Dynamic Programming"],
    },
    { id: 10, problemName: "Breadth-First Search", tags: ["Graph"] },
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
        <Topbar />
        {/* <Leaderboard leaderboard={leaderboardData} /> */}
        <ProblemList problemList={problemList} />
      </div>
    </div>
  );
}

export default App;
