import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
projectId: "cursonodejs-eeb7a",
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
messagingSenderId: "436579654973",
appId: process.env.FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export { db };
