
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcARwU9bicS_tXk2qemetIWg-qqPshiRw",
  authDomain: "learningfb-514d5.firebaseapp.com",
  projectId: "learningfb-514d5",
  storageBucket: "learningfb-514d5.appspot.com",
  messagingSenderId: "272948243653",
  appId: "1:272948243653:web:5ad0363553df4cbe2f14ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click",function(event) {
    event.preventDefault()
    const auth = getAuth();
    //inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("creating account");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
});

