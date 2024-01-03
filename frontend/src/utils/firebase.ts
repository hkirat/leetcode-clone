import { initializeApp } from "firebase/app";

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
