import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDlI7UdMik0n6-T8PLelPf15Z32bnoy_EU",
  authDomain: "offensivetest-81586.firebaseapp.com",
  projectId: "offensivetest-81586",
  storageBucket: "offensivetest-81586.appspot.com",
  messagingSenderId: "105357998997",
  appId: "1:105357998997:web:7c84e5a80b1b1da19b949c",
  measurementId: "G-6JZLB359ZV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// If app is present get the app or else initializeApp

const db = getFirestore();
const storage = getStorage();
export {app, db, storage}

