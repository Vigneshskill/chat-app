import { createContext, useState, useContext, useEffect } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(0);

  // const [loading, setLoading] = useState(true);

  // signin with google
  const signInPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  }

  // signout
  // const logout = () => signOut(auth);

 
  const value = {
    currentUser,
    setCurrentUser,
    signInPopup,
    // logout
  }

  // set currentUser
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // setLoading(false);
    });
    return unSubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}