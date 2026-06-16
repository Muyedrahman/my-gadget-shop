// 1 // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCADaC_XUV8Gdc3nZvaVk_yqv9bUcdoPcA",
//   authDomain: "gadget-shop-60aa9.firebaseapp.com",
//   projectId: "gadget-shop-60aa9",
//   storageBucket: "gadget-shop-60aa9.firebasestorage.app",
//   messagingSenderId: "190970861739",
//   appId: "1:190970861739:web:e6bb3464a6ad6ecaf17fee",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// 2

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export default app;

// 3
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ১. এখানে GoogleAuthProvider ইমপোর্ট করলাম

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // ২. Next.js-এর ডাবল ইনিশিয়ালাইজেশন এরর এড়ানোর কন্ডিশন
// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// // ৩. অথেনটিকেশন এক্সপোর্ট
// export const auth = getAuth(app);

// // ৪. গুগলের ওয়ান-ক্লিক লগইনের জন্য প্রোভাইডারটি এক্সপোর্ট করে দিলাম
// export const googleProvider = new GoogleAuthProvider();

// export default app;

// 4

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // Next.js-এর সার্ভার-সাইড ডাবল ইনিশিয়ালাইজেশন এরর এড়ানোর কন্ডিশন
// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// // অথেনটিকেশন ও গুগল প্রোভাইডার এক্সপোর্ট
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// export default app;

// 5

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // Next.js ডাবল ইনিশিয়ালাইজেশন এরর এড়ানোর কন্ডিশন
// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export default app;

// 6

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ১. GoogleAuthProvider ইমপোর্ট নিশ্চিত করুন

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Next.js ডাবল ইনিশিয়ালাইজেশন এরর এড়ানোর কন্ডিশন
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// ২. এই দুটি এক্সপোর্ট অবশ্যই থাকতে হবে
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // এটি মিসিং থাকার কারণেই এরর আসছিল

export default app;