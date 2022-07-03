// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVwmpb89v6I6051NWIvfSlUgryKK7KS4Q",
    authDomain: "fir-auth-1fb64.firebaseapp.com",
    databaseURL: "https://fir-auth-1fb64-default-rtdb.firebaseio.com",
    projectId: "fir-auth-1fb64",
    storageBucket: "fir-auth-1fb64.appspot.com",
    messagingSenderId: "601570600480",
    appId: "1:601570600480:web:2bc4605908f626921c7e45"
  };

// Initialize Firebase

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();
const db = app.database();
export {auth ,db}