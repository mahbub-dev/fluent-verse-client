/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

const useAxiosSecure = (logOut) => {
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("access-token");
		axiosSecure.interceptors.request.use((config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 403)
				) {
					logOut();
					navigate("/login");
				}
				return Promise.reject(error);
			}
		);
	}, [navigate, logOut]);

	return axiosSecure;
};

export default useAxiosSecure;
