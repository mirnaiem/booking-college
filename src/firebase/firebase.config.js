// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuzjbjdWxjVm2Ehl_pxoBG88UwK3UP7qc",
  authDomain: "college-booking-f27e8.firebaseapp.com",
  projectId: "college-booking-f27e8",
  storageBucket: "college-booking-f27e8.appspot.com",
  messagingSenderId: "864952943411",
  appId: "1:864952943411:web:a7dbce595d8f77924d7446"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app