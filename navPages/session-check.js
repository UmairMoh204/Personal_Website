// Secure Session Management
class SecureSessionManager {
  constructor() {
    this.SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours
    this.checkInterval = null;
    this.init();
  }

  init() {
    // Check session validity immediately
    if (!this.isValidSession()) {
      this.redirectToLogin();
      return;
    }

    // Set up periodic session checks
    this.checkInterval = setInterval(() => {
      if (!this.isValidSession()) {
        this.redirectToLogin();
      }
    }, 30000); // Check every 30 seconds

    // Prevent back button from accessing protected pages
    this.preventBackNavigation();
  }

  isValidSession() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const sessionExpiry = sessionStorage.getItem("sessionExpiry");
    const sessionData = sessionStorage.getItem("sessionData");

    if (isLoggedIn !== "true" || !sessionExpiry || !sessionData) {
      return false;
    }

    const expiryTime = parseInt(sessionExpiry);
    const currentTime = Date.now();

    // Check if session has expired
    if (currentTime > expiryTime) {
      this.clearSession();
      return false;
    }

    // Additional security checks
    try {
      const data = JSON.parse(sessionData);
      
      // Check if user agent has changed (potential session hijacking)
      if (data.userAgent !== navigator.userAgent) {
        this.clearSession();
        return false;
      }

      // Check if session is from a different browser session
      if (data.loginTime && (currentTime - data.loginTime) > this.SESSION_DURATION) {
        this.clearSession();
        return false;
      }

      return true;
    } catch (error) {
      this.clearSession();
      return false;
    }
  }

  clearSession() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("sessionData");
    sessionStorage.removeItem("sessionExpiry");
  }

  redirectToLogin() {
    // Clear any existing session
    this.clearSession();
    
    // Redirect to login page
    if (window.location.pathname.includes('/navPages/')) {
      window.location.replace("./login.html");
    } else {
      window.location.replace("./navPages/login.html");
    }
  }

  preventBackNavigation() {
    // Prevent using browser back button to access protected pages
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
      if (!this.isValidSession()) {
        this.redirectToLogin();
      }
    });
  }

  logout() {
    this.clearSession();
    this.redirectToLogin();
  }

  // Method to extend session (called on user activity)
  extendSession() {
    if (this.isValidSession()) {
      const newExpiry = Date.now() + this.SESSION_DURATION;
      sessionStorage.setItem("sessionExpiry", newExpiry.toString());
    }
  }
}

// Initialize session manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const sessionManager = new SecureSessionManager();
  
  // Extend session on user activity
  const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  activityEvents.forEach(event => {
    document.addEventListener(event, () => {
      sessionManager.extendSession();
    }, true);
  });

  // Make session manager available globally for logout functionality
  window.sessionManager = sessionManager;
});

// Additional security: Clear session on page unload
window.addEventListener('beforeunload', () => {
  // Optional: Clear session on page close for maximum security
  // sessionStorage.clear();
});

// Prevent right-click context menu (optional security measure)
document.addEventListener('contextmenu', (e) => {
  // Uncomment the next line if you want to disable right-click
  // e.preventDefault();
});

// Prevent keyboard shortcuts for developer tools (optional)
document.addEventListener('keydown', (e) => {
  // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'u')
  ) {
    // Uncomment the next line if you want to disable these shortcuts
    // e.preventDefault();
  }
}); 