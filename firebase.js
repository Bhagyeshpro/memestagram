import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCuH0ku1eYnYQCAeq_yuPxIl3HWhCcQVIM",
  authDomain: "offensivegrm-ef3f8.firebaseapp.com",
  projectId: "offensivegrm-ef3f8",
  storageBucket: "offensivegrm-ef3f8.appspot.com",
  messagingSenderId: "1049788822680",
  appId: "1:1049788822680:web:845163b79bd1268e660ced",
  measurementId: "G-53VSJN16DW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// If app is present get the app or else initializeApp

const db = getFirestore();
const storage = getStorage();
export {app, db, storage}

// 908329148519-8s84hbkoglavucm63go5ecmjsin1v7hk.apps.googleusercontent.com
// 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