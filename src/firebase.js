// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDNvRcCSs3_fggReKVrHfPRE7K1uxP2p8E',
  authDomain: 'clone-8c088.firebaseapp.com',
  projectId: 'clone-8c088',
  storageBucket: 'clone-8c088.appspot.com',
  messagingSenderId: '386863967568',
  appId: '1:386863967568:web:a8e8233e5179c748f5d055',
  measurementId: 'G-E5MQ1EW3NZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
