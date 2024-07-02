import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyCnJDLxDtknUUJ03WMuYfeAkcRbXRMChIY",
  authDomain: "hamsterkombat-ad2a3.firebaseapp.com",
  databaseURL: "https://hamsterkombat-ad2a3-default-rtdb.firebaseio.com",
  projectId: "hamsterkombat-ad2a3",
  storageBucket: "hamsterkombat-ad2a3.appspot.com",
  messagingSenderId: "531608280292",
  appId: "1:531608280292:web:8555ea183944a2b3a2a0f1",
  measurementId: "G-XGEMLH65SG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
