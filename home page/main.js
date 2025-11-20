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

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function sendTestData() {
    database.ref('testData').set({
        message: "Hello from JavaScript!",
        timestamp: new Date().toString(),
        status: "sent"
    })
    .then(() => {
        console.log("Test data sent successfully!");
    })
    .catch((error) => {
        console.error("Error sending test data: ", error);
    });
}

const hambIcon = document.getElementById('hamb-icon');
const navBtnMenu = document.getElementById('navBtnMenu');
const closeIcon = document.getElementById('closeIcon');

hambIcon.addEventListener('click', () => {
    navBtnMenu.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
    hambIcon.classList.toggle('d-none');
});

closeIcon.addEventListener('click', () => {
    navBtnMenu.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
    hambIcon.classList.toggle('d-none');
});



const signupbtn = document.getElementById('createAccount');
signupbtn.addEventListener('click', {

});
