// supildyti sita faila su duomenimis is firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// pasiemam reiksmes is .env

// exportuoti auth constanta 
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
//  https://firebase.google.com/docs/firestore/quickstart#web-version-9
export const db = getFirestore(app);

// stebim vartotojo prisijungimo busena
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log('prisijungimas', user.email);
  } else {
    // User is signed out
    // ...
    console.log('Logout user');
  }
});