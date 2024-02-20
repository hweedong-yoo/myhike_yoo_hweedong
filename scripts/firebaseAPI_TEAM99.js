//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDGee9ixf-4UY_mTTL1DX9hnvJW2YsdhbY",
    authDomain: "comp1800-demo-cf806.firebaseapp.com",
    projectId: "comp1800-demo-cf806",
    storageBucket: "comp1800-demo-cf806.appspot.com",
    messagingSenderId: "221083370510",
    appId: "1:221083370510:web:74ab4254e790e36c66685f"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
