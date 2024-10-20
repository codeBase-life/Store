import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyDD5rXjy8r2TXNwvwYnT3BlTl-P4hbrrsI",
  authDomain: "working-with-react.firebaseapp.com",
  projectId: "working-with-react",
  storageBucket: "working-with-react.appspot.com",
  messagingSenderId: "905837003576",
  appId: "1:905837003576:web:5fcee14db258a1b69e77cd",
  databaseURL:
    "https://working-with-react-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const App = initializeApp(config);
const auth = getAuth(App);
const firestore = getFirestore(App);
const storage = getStorage(App);

export { auth, firestore, storage };
