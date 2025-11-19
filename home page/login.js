// --- IN-MEMORY DATABASE (Non-persistent, only for simulation) ---
// This array simulates a database collection of user objects.
const usersDB = [];

/**
 * Finds a user object in the in-memory database by email.
 * @param {string} email - The email to search for.
 * @returns {object | undefined} The user object or undefined if not found.
 */


// --- DOM ELEMENT REFERENCES ---
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const messageBox = document.getElementById('message-box');
const authContainer = document.getElementById('auth-container');
const welcomeContainer = document.getElementById('welcome-container');
const userInfoSpan = document.getElementById('user-info');
const logoutButton = document.getElementById('logout-button');
const okButton = document.getElementById('ok-button');

// --- UI HELPER FUNCTIONS ---

/**
 * Displays a temporary message in the message box.
 * @param {string} message - The message content.
 * @param {boolean} isError - True for an error (red background), false for success (green background).
 */
function showMessage(message, isError = false) {
    messageBox.textContent = message;
    // Clear previous styles
    messageBox.className = 'text-center p-2 mb-4 rounded-lg text-sm transition-opacity duration-300 opacity-100';

    if (isError) {
        messageBox.classList.add('bg-red-100', 'text-red-800', 'shadow-sm');
    } else {
        messageBox.classList.add('bg-green-100', 'text-green-800', 'shadow-sm');
    }

    // Hide the message after 4 seconds
    setTimeout(() => {
        messageBox.classList.remove('opacity-100');
        messageBox.classList.add('opacity-0');
    }, 4000);
}

/**
 * Switches the view to the logged-in welcome screen.
 * @param {object} userData - The logged-in user's data.
 */
function showWelcomeScreen(userData) {
    authContainer.classList.add('hidden');
    welcomeContainer.classList.remove('hidden');
    userInfoSpan.innerHTML = `Hello, <strong>${userData.name || userData.email}</strong>! <br> Your unique ID is: <span class="text-xs text-indigo-600">${userData.userId}</span>`;

    // Clear the message box when switching screens
    messageBox.classList.remove('opacity-100');
    messageBox.classList.add('opacity-0');
}
// for signup welcome screen
function showWelcomeScreenSignup(userData) {
    authContainer.classList.add('hidden');
    welcomeContainer.classList.remove('hidden');
    userInfoSpan.innerHTML = `Hello, <strong>${userData.name || userData.email}</strong>! <br> Your unique ID is: <span class="text-xs text-indigo-600">${userData.userId}</span>`;

    logoutButton.style.display = 'none';
    // Clear the message box when switching screens
    messageBox.classList.remove('opacity-100');
    messageBox.classList.add('opacity-0');
}

/**
 * Switches the view back to the authentication form.
 */
function showAuthScreen() {
    authContainer.classList.remove('hidden');
    welcomeContainer.classList.add('hidden');
    showMessage('You have been logged out.', false);
}

/**
 * Sets up the event listeners for tab switching.
 */
function setupTabbedForms() {
    signupTab.addEventListener('click', () => {
        signupTab.classList.add('tab-active');
        loginTab.classList.remove('tab-active');
        signupForm.classList.remove('form-hidden');
        signupForm.classList.add('form-visible');
        loginForm.classList.add('form-hidden');
        loginForm.classList.remove('form-visible');
        messageBox.classList.remove('opacity-100');
        messageBox.classList.add('opacity-0');
        signupTab.style.color = '#4f46e5';
        signupTab.style.borderBottomColor = '#4f46e5';
        loginTab.style.color = '#6b7280';
        loginTab.style.borderBottomColor = 'transparent';
    });

    loginTab.addEventListener('click', () => {
        loginTab.classList.add('tab-active');
        signupTab.classList.remove('tab-active');
        loginForm.classList.remove('form-hidden');
        loginForm.classList.add('form-visible');
        signupForm.classList.add('form-hidden');
        signupForm.classList.remove('form-visible');
        messageBox.classList.remove('opacity-100');
        messageBox.classList.add('opacity-0');
        signupTab.style.color = '#6b7280';
        signupTab.style.borderBottomColor = 'transparent';
        loginTab.style.color = '#4f46e5';
        loginTab.style.borderBottomColor = '#4f46e5';
    });
}

// --- AUTHENTICATION HANDLERS ---

/**
 * Handles the signup form submission by creating a new user in the in-memory database.
 */
function handleSignup(e) {
    e.preventDefault();

    const name = signupForm['signup-name'].value.trim();
    const email = signupForm['signup-email'].value.trim();
    const password = signupForm['signup-password'].value;

    // Simple client-side validation
    if (!name || !email || !password || password.length < 6) {
        showMessage('Please fill out all fields. Password must be at least 6 characters.', true);
        return;
    }

    const  userId= Date.now().toString() + Math.random().toString(16).slice(2); // Simple unique ID generation
    // Create new user object (simulate database entry)
    const newUser = {[name]:{
        name,
        userId,
        email,
        password, // NOTE: In a real app, passwords must be securely hashed!
        createdAt: new Date().toISOString()
    }
    };

    sendUserData(newUser);

    showMessage('Account created successfully! Auto-logging you in.', false);
    signupForm.reset();
    showWelcomeScreenSignup(newUser);
    console.log("Current Users:", usersDB);
}

/**
 * Handles the login form submission by checking credentials against the in-memory database.
 */
async function handleLogin(e) {
    e.preventDefault();

    const email = loginForm['login-email'].value.trim();
    const password = loginForm['login-password'].value;

    if (!email || !password) {
        showMessage('Please enter your email and password.', true);
        return;
    }

    try {
        // Get the full user data
        const userData = await getUserFromFirestore(email);
        
        if (!userData) {
            showMessage('Login failed: Invalid email or password.', true);
            return;
        }

        // Check password
        if (userData.password === password) {
            showMessage('Logged in successfully!', false);
            loginForm.reset();
            showWelcomeScreen(userData);
        } else {
            showMessage('Login failed: Invalid email or password.', true);
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage('An error occurred during login. Please try again.', true);
    }
}

setupTabbedForms();

// Attach form submission handlers
signupForm.addEventListener('submit', handleSignup);
loginForm.addEventListener('submit', handleLogin);

// Attach logout handler
logoutButton.addEventListener('click', showAuthScreen);
okButton.addEventListener('click', showAuthScreen);



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX44m5Bi3aO1RQPh5r0BSKRwEUU4mwUgU",
  authDomain: "resume-builder-fb3cf.firebaseapp.com",
  databaseURL: "https://resume-builder-fb3cf-default-rtdb.firebaseio.com",
  projectId: "resume-builder-fb3cf",
  storageBucket: "resume-builder-fb3cf.firebasestorage.app",
  messagingSenderId: "1091521301293",
  appId: "1:1091521301293:web:d33205cdaa48d88450a1a4",
  measurementId: "G-WT1VGZRCBM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to the database
// const database = firebase.database();
const database = firebase.database();

// Helper function to encode email for Firebase path
function encodeEmail(email) {
    return email.replace(/\./g, ',');
}

// Helper function to decode email from Firebase path
function decodeEmail(encodedEmail) {
    return encodedEmail.replace(/,/g, '.');
}

function sendUserData(data) {
    // Get the email from the first (and only) key in data
    const email = Object.keys(data)[0];
    const encodedEmail = encodeEmail(email);
    const encodedData = { [encodedEmail]: data[email] };
    
    database.ref('users').set(encodedData)
    .then(() => {
        console.log("Test data sent successfully!");
    })
    .catch((error) => {
        console.error("Error sending test data: ", error);
    });
}


async function getUserFromFirestore(email) {
  try {
    const encodedEmail = encodeEmail(email);
    const snapshot = await database.ref(`users/${encodedEmail}`).once('value');
    
    if (snapshot.exists()) {
      const userData = snapshot.val();
      return userData; // Return the full user data
    } else {
      console.log(`No user found with the email: ${email}`);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user data:", error);
    throw error; // Re-throw the error for external handling
  }
}
