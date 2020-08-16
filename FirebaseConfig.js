import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5fc3N-0DUS7W3zrHWG7XaxsBcd9BwuH0",
  authDomain: "midas-2e1a3.firebaseapp.com",
  databaseURL: "https://midas-2e1a3.firebaseio.com",
  projectId: "midas-2e1a3",
  storageBucket: "midas-2e1a3.appspot.com",
  messagingSenderId: "1040303416082",
  appId: "1:1040303416082:web:d16a4e3e1efe6e9ff489cb",
  measurementId: "G-BVBLCH7TBP",
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
