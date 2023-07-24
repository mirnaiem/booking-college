import { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config'
import  {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

// register user
const registerUSer=(email,password)=>{
 setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
}

// login user
const loginUser=(email,password)=>{
 setLoading(true);
 return signInWithEmailAndPassword(auth,email,password)
}

// google login
const googleProvider=new GoogleAuthProvider()
const logWithGoogle=()=>{
 setLoading(true)
 return signInWithPopup(auth,googleProvider)
}

// gitHub login
const gitHubProvider=new GithubAuthProvider()
const gitHubLogin=()=>{
 setLoading(true)
 return signInWithPopup(auth,gitHubProvider)
}
 // Logout.............

 const logOutUser=()=>{
  return signOut(auth)
 };

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
   setLoading(false)
  })
 return ()=>{
  return unSubscribe()
 }
 },[])

 const authInfo={
  user,
  loading,
 registerUSer,
 loginUser,
 logWithGoogle,
 logOutUser,
 gitHubLogin
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;