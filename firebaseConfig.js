// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACnlbzcGx2mw7cOuH_h58aEYPiHmwUM6Q",
  authDomain: "artium-27958.firebaseapp.com",
  databaseURL: "https://artium-27958-default-rtdb.firebaseio.com",
  projectId: "artium-27958",
  storageBucket: "artium-27958.appspot.com",
  messagingSenderId: "992363134264",
  appId: "1:992363134264:web:641ce073ad7667e467d5cd",
  measurementId: "G-J6KQX8GVED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const storage = getStorage(app);
export const database = getDatabase(app);
