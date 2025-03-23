// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOYKeHKYxjftFKemFjoAm8a3UTb6VO5Hk",
  authDomain: "portfoliowebsite-2f267.firebaseapp.com",
  projectId: "portfoliowebsite-2f267",
  storageBucket: "portfoliowebsite-2f267.appspot.com",
  messagingSenderId: "787376072603",
  appId: "1:787376072603:web:d8e8935f8c4c53ec3f633e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Befeore DOM Loaded");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Loaded");

  document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.replace("../index.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage} (Code: ${errorCode})`);
      });
  });
});
