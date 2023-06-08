/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import app from '../../firebase.config'
import Swal from 'sweetalert2'
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const auth = getAuth(app)
    const [user, setUser] = useState('')
    const isUserLoggedIn = localStorage.getItem('uid')
    const provider = new GoogleAuthProvider();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser('')
            }
        });
        return unsubscribe()
    }, [auth])

    const logOut = () => {
        signOut(auth)
        localStorage.clear()
        setUser('')
        navigate('/')
    }

    const userLogin = (user, path) => {
        setUser(user)
        localStorage.setItem('uid', user?.user)
        navigate(`${path.state?.from || '/'}`)
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                userLogin(user, location)
            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Firebase Error',
                    text: errorMessage,
                })
            });
    }
    const value = {
        user,
        setUser,
        isUserLoggedIn,
        logOut,
        userLogin,
        handleGoogleLogin
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
export default AuthProvider