import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const UserDataContext = React.createContext();

export const useUserData = () => {
  return useContext(UserDataContext);
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;
    const getUserFromDb = async () => {
      const registeredUsersRef = doc(db, 'RegisteredUsers', currentUser.uid);
      const data = await getDoc(registeredUsersRef);
      setUserData(data.data());
    };
    getUserFromDb();
  }, [currentUser]);

  const value = {
    userData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
