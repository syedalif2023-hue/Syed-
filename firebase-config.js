// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpiRG3ZwxY9trXn4l4RPSdNDalaRzPmaU",
  authDomain: "syed-kirana-shop.firebaseapp.com",
  databaseURL: "https://syed-kirana-shop-default-rtdb.firebaseio.com",
  projectId: "syed-kirana-shop",
  storageBucket: "syed-kirana-shop.firebasestorage.app",
  messagingSenderId: "152414262069",
  appId: "1:152414262069:web:a27ddda6004db29fdbf27c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Function
window.registerUser = (mobile, password) => {
    const fakeEmail = mobile + "@syed.com"; // Number ko email format banaya
    return createUserWithEmailAndPassword(auth, fakeEmail, password);
};

// Login Function
window.loginUser = (mobile, password) => {
    const fakeEmail = mobile + "@syed.com";
    return signInWithEmailAndPassword(auth, fakeEmail, password);
};
