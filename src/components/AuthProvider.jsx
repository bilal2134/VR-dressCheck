import { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = { user, loginWithGoogle, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
