import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const auth = getAuth();

// Add event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburger && navLinks) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});



