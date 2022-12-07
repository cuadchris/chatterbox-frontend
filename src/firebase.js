// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEtMxR07Tw9ixDBPsilTg4rC3Ll1_k_is",
  authDomain: "chatterbox-frontend.firebaseapp.com",
  projectId: "chatterbox-frontend",
  storageBucket: "chatterbox-frontend.appspot.com",
  messagingSenderId: "614198193544",
  appId: "1:614198193544:web:70f1519b54724e00795e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
