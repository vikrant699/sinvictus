import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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

  const addUserToDb = (collectionName, docID, data) => {
    const registeredUsersRef = doc(db, collectionName, docID);
    return setDoc(registeredUsersRef, data);
  };

  const getUserFromDb = async () => {
    const registeredUsersRef = doc(db, 'RegisteredUsers', currentUser.email);
    const data = await getDoc(registeredUsersRef);
    setUsers(data.data());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
      getUserFromDb();
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    addUserToDb,
    users,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
