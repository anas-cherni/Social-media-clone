import "firebase/storage"
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBfHQ_dS2rLw9fUgaZi4W7l5D17MR9JaHM",
    authDomain: "fb-clone-n0s.firebaseapp.com",
    projectId: "fb-clone-n0s",
    storageBucket: "fb-clone-n0s.appspot.com",
    messagingSenderId: "722009516642",
    appId: "1:722009516642:web:82ba60d1fad9130003ff3b"
};

const app = !getApps().length
    ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };