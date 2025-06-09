// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZTp4sTYq_JUWi3QkbyFqTEm7av-zPmtY",
  authDomain: "commandeboisson-9f972.firebaseapp.com",
  databaseURL: "https://commandeboisson-9f972-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "commandeboisson-9f972",
  storageBucket: "commandeboisson-9f972.appspot.com",
  messagingSenderId: "847234687672",
  appId: "1:847234687672:web:170361d30f452d5178ca4d",
  measurementId: "G-T6RMTJ6VVQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
