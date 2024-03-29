import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';





export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [billingAddress,setBillingAddress] = useState({});
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth?.currentUser, userInfo)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        return signOut(auth)
    }

    // social login
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
   

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user observing.....')
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])
    const authInfo = {
        createUser,
        updateUser,
        userLogin,
        LogOut,
        googleSignIn,
        setBillingAddress,
        billingAddress,
        user,
        auth,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;