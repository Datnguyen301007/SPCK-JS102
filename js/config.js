import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABDPz8aZQlb7QLZTJSIInnXqkCBzN2aIw",
    authDomain: "spck-js102.firebaseapp.com",
    projectId: "spck-js102",
    storageBucket: "spck-js102.appspot.com",
    messagingSenderId: "476827873566",
    appId: "1:476827873566:web:f8eadd7b3b2bb56dec590f",
    measurementId: "G-5B2GZMWGYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)