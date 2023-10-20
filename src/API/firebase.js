// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24EF-vFcuyHgu0F4U3FzC6M0f-SLU7UM",
  authDomain: "realtor-clone-react-d112f.firebaseapp.com",
  projectId: "realtor-clone-react-d112f",
  storageBucket: "realtor-clone-react-d112f.appspot.com",
  messagingSenderId: "703171148743",
  appId: "1:703171148743:web:0e29157a0722288b5877e2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = getApps?.length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { db, storage, app, auth };
