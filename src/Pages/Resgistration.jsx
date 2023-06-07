import React from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="max-w-[800px] w-full  bg-white p-8 rounded shadow-lg bg-gradient-to-r from-gray-500 to-gray-700" >
                <h2 className="text-2xl font-bold text-center text-white mb-4">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div >
                            <label htmlFor="name" className="block mb-1 text-white font-medium">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: true })}
                                className="w-full p-2   outline-none bg-gray-300 rounded"
                            />
                            {errors.name && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 text-white font-medium">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
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
                                    className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
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
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1 text-white font-medium">
                                Confirm Password:
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    {...register("confirmPassword", { required: true })}
                                    className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="photoURL" className="block mb-1 text-white font-medium">
                                Photo URL:
                            </label>
                            <input
                                type="text"
                                id="photoURL"
                                {...register("photoURL", { required: true })}
                                className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
                            />
                            {errors.photoURL && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="gender" className="block mb-1 text-white font-medium">
                                Gender:
                            </label>
                            <select
                                id="gender"
                                {...register("gender", { required: true })}
                                className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-1 text-white font-medium">
                                Phone Number:
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                {...register("phoneNumber", { required: true })}
                                className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
                            />
                            {errors.phoneNumber && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-1 text-white font-medium">
                                Address:
                            </label>
                            <textarea
                                id="address"
                                {...register("address", { required: true })}
                                className="w-full p-2 border border-gray-300 outline-none bg-gray-300 rounded"
                            ></textarea>
                            {errors.address && (
                                <span className="text-gray-900">This field is required</span>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-white">
                    Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;
