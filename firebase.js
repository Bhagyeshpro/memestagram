import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAodkQgO_210C527xK1c1tWSJ8QC1QLvCE",
  authDomain: "offensivegrm-4d45a.firebaseapp.com",
  projectId: "offensivegrm-4d45a",
  storageBucket: "offensivegrm-4d45a.appspot.com",
  messagingSenderId: "908329148519",
  appId: "1:908329148519:web:d7551749e2ef645fb834c2",
  measurementId: "G-JP735Z8E4E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// If app is present get the app or else initializeApp

const db = getFirestore();
const storage = getStorage();
export {app, db, storage}

// 908329148519-8s84hbkoglavucm63go5ecmjsin1v7hk.apps.googleusercontent.com
// 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