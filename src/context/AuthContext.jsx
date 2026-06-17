"use client";  

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";  
 

const AuthContext = createContext({});

// ২ 
export const useAuth = () => useContext(AuthContext);

// ৩ 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);  

  // ফায়ারবেসের 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

   
  const signUp = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    if (name) {
      await updateProfile(userCredential.user, { displayName: name });
    }
    return userCredential.user;
  };

   
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  //   AuthContext-এর all data
  return (
    <AuthContext.Provider
      value={{ user, loading, signUp, logIn, loginWithGoogle, logOut }}
    >
      {loading ? (
     
        <div className="flex h-screen items-center justify-center bg-gray-950 text-white font-medium">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 tracking-wider">Loading TechNest...</p>
          </div>
        </div>
      ) : (
        children  
      )}
    </AuthContext.Provider>
  );
};
