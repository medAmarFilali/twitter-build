import { initializeApp, getApps, getApp } from "firebase";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCfEAZ8qshbtgDV8XcIu-25s-I9vMJ06c",
  authDomain: "twitter-2-dz.firebaseapp.com",
  projectId: "twitter-2-dz",
  storageBucket: "twitter-2-dz.appspot.com",
  messagingSenderId: "448471071486",
  appId: "1:448471071486:web:a9f9b30b9a65a5e08b03af",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
