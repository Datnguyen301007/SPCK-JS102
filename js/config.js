import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABDPz8aZQlb7QLZTJSIInnXqkCBzN2aIw",
    authDomain: "spck-js102.firebaseapp.com",
    databaseURL: "https://spck-js102-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spck-js102",
    storageBucket: "spck-js102.appspot.com",
    messagingSenderId: "476827873566",
    appId: "1:476827873566:web:f8eadd7b3b2bb56dec590f",
    measurementId: "G-5B2GZMWGYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);