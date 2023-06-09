import React from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import Swal from 'sweetalert2'
import { useAuth } from "../Hooks/useAuth";
import axios from "axios";

const Login = () => {
    const location = useLocation()
    const auth = getAuth(app)
    const { user, userLogin, handleGoogleLogin } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            const user = userCredential.user;
            signInWithEmailAndPassword(auth, data.email, data.password)
            const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/user?google=true`, { name: user.displayName, email: user.email })
            user.access_token = res?.data?.access_token
            userLogin(user, location)
        } catch (error) {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'firebase error',
                text: errorMessage,
            })
        }
    };


    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    if (user?.displayName) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-lg bg-gradient-to-r from-gray-500 to-gray-700">
                <h2 className="text-2xl text-white text-center font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-white mb-1 font-medium">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: true })}
                            className="w-full p-2   outline-none bg-gray-300 rounded"
                        />
                        {errors.email && (
                            <span className="text-gray-900">This field is required</span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-white font-medium">
                            Password:
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                {...register("password", { required: true })}
                                className="w-full p-2   outline-none bg-gray-300 rounded"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="text-gray-900">This field is required</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-white">
                    Don't have an account? <Link className="text-blue-300" to="/register">Register</Link>
                </p>
                <button
                    className="flex items-center mt-5 mx-auto justify-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-red-700"
                    onClick={handleGoogleLogin}
                >
                    <FaGoogle className="mr-2" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
