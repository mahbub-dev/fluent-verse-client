/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import app from '../../firebase.config'
import Swal from 'sweetalert2'
import axios from 'axios'
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
        //    logOut()
        return unsubscribe()
    }, [auth])

    const logOut = () => {
        signOut(auth)
        localStorage.clear()
        setUser('')
        navigate('/login')
    }

    const userLogin = (user, path) => {
        setUser(user)
        localStorage.setItem('uid', user?.uid)
        localStorage.setItem('access-token', user.access_token)
        navigate(`${path.state?.from || '/'}`)
    }

    const handleGoogleLogin = async (location) => {
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user;
            const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/user?google=true`, { name: user.displayName, email: user.email })
            console.log(res.data)
            user.access_token = res?.data?.access_token
            userLogin(user, location)
        } catch (error) {
            const errorMessage = error?.response?.data.message || error.message
            Swal.fire({
                icon: 'error',
                text: errorMessage,
            })
        }

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