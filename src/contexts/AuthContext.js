import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const addUserToDb = (collectionName, docID, data) => {
    const registeredUsersRef = doc(db, collectionName, docID);
    return setDoc(registeredUsersRef, data);
  };

  const signUp = async (email, password, collectionName, data) => {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      setDoc(doc(db, collectionName, cred.user.uid), data);
    });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [loading]);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    addUserToDb,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
