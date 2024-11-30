// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUJBQbXFPi3qFs5cSbUd1Izk8VU5x-pk",
  authDomain: "frist-demo-dc543.firebaseapp.com",
  projectId: "frist-demo-dc543",
  storageBucket: "frist-demo-dc543.firebasestorage.app",
  messagingSenderId: "548196626407",
  appId: "1:548196626407:web:1c290c257095fbdc299742",
  measurementId: "G-LN3XTCSELK",
  databaseURL: "https://frist-demo-dc543-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);