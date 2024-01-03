import "./App.css";
import { Chart } from "primereact/chart";
import { Landing } from "./components/Landing";
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
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
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

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

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
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
      <div className="max-w-screen-2xl w-full">
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
              <h3 className="text-center text-2xl font-normal">Progress</h3>
              <p className="mt-8 mb-16">
                The secret of getting ahead is getting started.
              </p>
              <div className="flex">
                <div
                  className="flex-1 
                 border-t-4 border-red-500 text-center pt-2 text-2xl"
                >
                  <p>Unsolved</p>
                  <p>297</p>
                </div>
                <div
                  className="flex-1 
                  border-t-4 border-green-500 text-center pt-2 text-2xl"
                >
                  <p>Solved</p>
                  <p>0</p>
                </div>
              </div>
            </Card>
          </aside>
          <main>
            <Card>
              <h3 className="text-2xl font-normal mb-8">Latest Problems</h3>
              <div className="pb-5 border-b-[1px] mb-5">
                <div className="mb-4 flex gap-3 text-lg">
                  <span className="text-gray-700">#337</span>
                  <span>Tuta Puta</span>
                </div>
                <span className="inline-block p-2 text-white bg-gray-600">
                  numerphile23
                </span>
              </div>
              <div className="pb-5 border-b-[1px]">
                <div className="mb-4 flex gap-3 text-lg">
                  <span className="text-gray-700">#337</span>
                  <span>Tuta Puta</span>
                </div>
                <span className="inline-block p-2 text-white bg-gray-600">
                  numerphile23
                </span>
              </div>
            </Card>
          </main>
          <aside>
            <div className="mb-4">
              <Card>
                <h3 className="text-2xl font-normal mb-8">
                  Submission Activity
                </h3>
                <Chart type="line" data={chartData} options={chartOptions} />
              </Card>
            </div>
            <div className="mb-4">
              <Card>
                <h3 className="text-2xl font-normal mb-8">Popular tags</h3>
                <div className="flex gap-3 flex-wrap">
                  <span className="inline-block p-2 text-white bg-gray-600">
                    numerphile23
                  </span>
                  <span className="inline-block p-2 text-white bg-gray-600">
                    games
                  </span>
                  <span className="inline-block p-2 text-white bg-gray-600">
                    dp
                  </span>
                  <span className="inline-block p-2 text-white bg-gray-600">
                    modular
                  </span>
                  <span className="inline-block p-2 text-white bg-gray-600">
                    numerphile23
                  </span>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
