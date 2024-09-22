// 必要な関数を import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAujgbZaB1Ujo02Oy5liA829uxOSt8NrTM",
  authDomain: "team-original-app-2bed6.firebaseapp.com",
  projectId: "team-original-app-2bed6",
  storageBucket: "team-original-app-2bed6.appspot.com",
  messagingSenderId: "249578863603",
  appId: "1:249578863603:web:f5ef6992006b0bb7ae3086",
};

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app);
