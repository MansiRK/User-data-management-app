// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnWLsgfCxORGPgN-e3jP-0T4-wC9yWwHE",
  authDomain: "user-data-management-app.firebaseapp.com",
  databaseURL: "https://user-data-management-app-default-rtdb.firebaseio.com",
  projectId: "user-data-management-app",
  storageBucket: "user-data-management-app.appspot.com",
  messagingSenderId: "123231991515",
  appId: "1:123231991515:web:bec9d884d6b99829c03efe",
  measurementId: "G-FWKJZRFT6S",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export default database;
