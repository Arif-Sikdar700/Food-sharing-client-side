import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import React from "react";
import { auth } from "../firebase.init";
import { jwtTokenGet, jwtTokenLogOut } from "../Api/Api";

export default function AuthProvide({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const UserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UserLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google login
  const provider = new GoogleAuthProvider();
  const UserGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  // github login
  const github = new GithubAuthProvider();
  const userGitHub = () => {
    return signInWithPopup(auth, github);
  };
  const userUpdateProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  // google login
  
  const google = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(google)
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currenUser) => {
      setUser(currenUser);
      if (currenUser?.email) {
        const user = { email: currenUser.email };
        try {
          const res = await jwtTokenGet(user);

          setLoading(false);
        } catch (error) {}
      } else {
        try {
          const res = await jwtTokenLogOut(user);

          setLoading(false);
        } catch (error) {}
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const authInfo = {
    user,
    setUser,
    loading,
    UserLogin,
    UserRegister,
    UserLogOut,
    userUpdateProfile,
    UserGoogle,
    userGitHub,
    googleLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
