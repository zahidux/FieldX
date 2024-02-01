import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //create user

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sing in user

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const profileUpdate = (currentUser, name, photoLink) => {
    setLoading(true);
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photoLink,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    signUpUser,
    login,
    profileUpdate,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
