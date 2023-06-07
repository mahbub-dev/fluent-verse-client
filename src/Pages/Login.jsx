import React from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen">
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
              <span className="text-red-500">This field is required</span>
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
      </div>
    </div>
  );
};

export default Login;
