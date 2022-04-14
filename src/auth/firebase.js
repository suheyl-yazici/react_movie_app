import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// const firebaseConfig = {
//     apiKey: "AIzaSyCG5Tv1CXs_5EQTigs0kIO2TXDulNyu6_I",
//     authDomain: "movie-app-ff5b0.firebaseapp.com",
//     projectId: "movie-app-ff5b0",
//     storageBucket: "movie-app-ff5b0.appspot.com",
//     messagingSenderId: "718132710232",
//     appId: "1:718132710232:web:0685063137021a3c61732d"
//   };

  const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password , displayName , navigate) => {
    try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
        displayName: displayName,
    });
    navigate("/");
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

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
        setCurrentUser(currentUser);
        // ...
        } else {
        // User is signed out
        setCurrentUser(false);
        }
    });
}

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    navigate("/");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    // ...
  });
}
