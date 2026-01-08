// // Firebase imports
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAOYKeHKYxjftFKemFjoAm8a3UTb6VO5Hk",
//   authDomain: "portfoliowebsite-2f267.firebaseapp.com",
//   projectId: "portfoliowebsite-2f267",
//   storageBucket: "portfoliowebsite-2f267.appspot.com",
//   messagingSenderId: "787376072603",
//   appId: "1:787376072603:web:d8e8935f8c4c53ec3f633e"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Security configurations
// const MAX_LOGIN_ATTEMPTS = 5;
// const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
// const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

// // Rate limiting and security state
// let loginAttempts = 0;
// let lockoutUntil = 0;

// console.log("Before DOM Loaded");

// document.addEventListener('DOMContentLoaded', () => {
//   console.log("DOM Loaded");

//   const loginForm = document.getElementById('loginForm');
//   const loginButton = document.querySelector('.login-button');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');
  
//   // Check if user is already locked out
//   checkLockoutStatus();
  
//   // Check if user has a valid session
//   checkSessionValidity();

//   loginForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     // Check if currently locked out
//     if (isLockedOut()) {
//       const remainingTime = Math.ceil((lockoutUntil - Date.now()) / 60000);
//       alert(`Account temporarily locked. Please try again in ${remainingTime} minutes.`);
//       return;
//     }

//     const email = emailInput.value.trim();
//     const password = passwordInput.value;

//     if (!email || !password) {
//       alert("Please enter both email and password.");
//       return;
//     }

//     // Validate email format
//     if (!isValidEmail(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Disable form during authentication
//     setFormState(false, "Signing in...");

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       // Reset login attempts on successful login
//       loginAttempts = 0;
//       localStorage.removeItem('loginAttempts');
//       localStorage.removeItem('lockoutUntil');
      
//       // Create secure session
//       createSecureSession(user.uid);
      
//       // Redirect to main page
//       window.location.replace("../index.html");
      
//     } catch (error) {
//       loginAttempts++;
//       localStorage.setItem('loginAttempts', loginAttempts.toString());
      
//       if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
//         lockoutUntil = Date.now() + LOCKOUT_DURATION;
//         localStorage.setItem('lockoutUntil', lockoutUntil.toString());
//         alert(`Too many failed attempts. Account locked for 15 minutes.`);
//       } else {
//         const remainingAttempts = MAX_LOGIN_ATTEMPTS - loginAttempts;
//         alert(`Login failed. ${remainingAttempts} attempts remaining.`);
//       }
      
//       // Clear password field
//       passwordInput.value = '';
//       setFormState(true, "Sign In");
//     }
//   });

//   // Add input validation
//   emailInput.addEventListener('input', () => {
//     if (emailInput.value && !isValidEmail(emailInput.value)) {
//       emailInput.style.borderColor = '#ff4444';
//     } else {
//       emailInput.style.borderColor = '#404040';
//     }
//   });
// });

// // Security helper functions
// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function isLockedOut() {
//   return Date.now() < lockoutUntil;
// }

// function checkLockoutStatus() {
//   const storedAttempts = localStorage.getItem('loginAttempts');
//   const storedLockout = localStorage.getItem('lockoutUntil');
  
//   if (storedAttempts) {
//     loginAttempts = parseInt(storedAttempts);
//   }
  
//   if (storedLockout) {
//     lockoutUntil = parseInt(storedLockout);
//   }
// }

// function createSecureSession(userId) {
//   const sessionData = {
//     userId: userId,
//     loginTime: Date.now(),
//     sessionId: generateSessionId(),
//     userAgent: navigator.userAgent,
//     ipHash: generateIPHash()
//   };
  
//   // Store session data with expiration
//   sessionStorage.setItem("isLoggedIn", "true");
//   sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
//   sessionStorage.setItem("sessionExpiry", (Date.now() + SESSION_DURATION).toString());
// }

// function checkSessionValidity() {
//   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//   const sessionExpiry = sessionStorage.getItem("sessionExpiry");
//   const sessionData = sessionStorage.getItem("sessionData");
  
//   if (isLoggedIn === "true" && sessionExpiry && sessionData) {
//     const expiryTime = parseInt(sessionExpiry);
//     const currentTime = Date.now();
    
//     if (currentTime > expiryTime) {
//       // Session expired
//       clearSession();
//       return false;
//     }
    
//     // Additional security checks
//     const data = JSON.parse(sessionData);
//     if (data.userAgent !== navigator.userAgent) {
//       // User agent changed - potential session hijacking
//       clearSession();
//       return false;
//     }
    
//     return true;
//   }
  
//   return false;
// }

// function clearSession() {
//   sessionStorage.removeItem("isLoggedIn");
//   sessionStorage.removeItem("sessionData");
//   sessionStorage.removeItem("sessionExpiry");
// }

// function generateSessionId() {
//   return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
// }

// function generateIPHash() {
//   // Simple hash based on available browser info
//   const userAgent = navigator.userAgent;
//   const language = navigator.language;
//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   return btoa(userAgent + language + timezone).substr(0, 16);
// }

// function setFormState(enabled, buttonText) {
//   const loginButton = document.querySelector('.login-button');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');
  
//   emailInput.disabled = !enabled;
//   passwordInput.disabled = !enabled;
//   loginButton.disabled = !enabled;
//   loginButton.querySelector('span').textContent = buttonText;
// }

// // Auto-logout on tab close or browser close
// window.addEventListener('beforeunload', () => {
//   // Clear session on page unload for additional security
//   // sessionStorage.clear(); // Uncomment for strict security
// });

// // Check session validity periodically (only on protected pages)
// if (!window.location.pathname.includes('login.html')) {
//   setInterval(() => {
//     if (!checkSessionValidity()) {
//       window.location.replace("./login.html");
//     }
//   }, 60000); // Check every minute
// }
