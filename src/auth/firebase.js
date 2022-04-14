import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCG5Tv1CXs_5EQTigs0kIO2TXDulNyu6_I",
    authDomain: "movie-app-ff5b0.firebaseapp.com",
    projectId: "movie-app-ff5b0",
    storageBucket: "movie-app-ff5b0.appspot.com",
    messagingSenderId: "718132710232",
    appId: "1:718132710232:web:0685063137021a3c61732d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password , navigate) => {
    try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    navigate("/")
    console.log(userCredential);
    } catch (error) {
        alert(error.message)
    }
};

export const signIn = async(email, password , navigate) => {
    try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
    console.log(userCredential);
    } catch (error) {
        alert(error.message)
  }
};

export const logOut = () => {
    signOut(auth);
    alert("loged out succesfully")
}