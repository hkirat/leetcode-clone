import "./App.css";
import { Landing } from "./components/Landing";
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";
import { Topbar } from "./components/Topbar";
import { Card } from "./components/Card";

const firebaseConfig = {
  apiKey: "AIzaSyAjjsbl9eSDWSmfrWpFPap2uGuwONZ2N4g",
  authDomain: "leetcode-clone-c39eb.firebaseapp.com",
  projectId: "leetcode-clone-c39eb",
  storageBucket: "leetcode-clone-c39eb.appspot.com",
  messagingSenderId: "66814187798",
  appId: "1:66814187798:web:a6b3702e191448722dd837",
  measurementId: "G-ET5FNB5WCN",
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
  }, []);

  if (user.loading) {
    return <div>loading ...</div>;
  }

  if (!user.user) {
    return (
      <div>
        <Signin />
      </div>
    );
  }

  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar />
        <div className="mt-4 grid grid-cols-[1fr_2fr_1fr] gap-4">
          <aside>
            <div className="mb-4">
              <Card>
                Start following your friends on Erdős to view their activity
                feed on the homepage.
              </Card>
            </div>
            <Card>
              <h3 className="text-center text-2xl font-normal mb-8">
                Progress
              </h3>

              <p>The secret of getting ahead is getting started.</p>
            </Card>
          </aside>
          <main>
            <Card>
              <h3 className="text-2xl font-normal mb-8">Latest Problems</h3>
              <div>
                
              </div>
            </Card>
          </main>
          <aside>
            <Card>hi</Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
