// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpiRG3ZwxY9trXn4l4RPSdNDalaRzPmaU",
  authDomain: "syed-kirana-shop.firebaseapp.com",
  databaseURL: "https://syed-kirana-shop-default-rtdb.firebaseio.com",
  projectId: "syed-kirana-shop",
  storageBucket: "syed-kirana-shop.firebasestorage.app",
  messagingSenderId: "152414262069",
  appId: "1:152414262069:web:a27ddda6004db29fdbf27c",
  measurementId: "G-39CX20F612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Functions for the form
window.initRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'normal'
    });
};

window.sendOTP = (phone) => {
    return signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
};
