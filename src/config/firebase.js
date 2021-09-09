import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAAX6b-J2EY-BgDrEUjZd6NXRRNFJzPUOs',
  authDomain: 'grouper-319200.firebaseapp.com',
  projectId: 'grouper-319200',
  storageBucket: 'grouper-319200.appspot.com',
  messagingSenderId: '900361003687',
  appId: '1:900361003687:web:656b702c97e533ec197182'
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
