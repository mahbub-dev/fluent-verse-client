import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddAClass = () => {
    const { user, logOut } = useAuth();
    const axiosSecure = useAxiosSecure(logOut)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            data.instructor_name = user.displayName
            data.instructor_email = user.email
            await axiosSecure.post('/instructor/add-class', data)
            Swal.fire({
                icon: 'success',
                title: 'Successfull',
                text: 'Class added successfully'
            })
            reset()
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-[800px] w-full bg-white p-8 rounded shadow-lg bg-gradient-to-r from-gray-500 to-gray-700">
                <h2 className="text-2xl font-bold text-center text-white mb-4">Create a Class</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="className" className="block mb-1 text-white font-medium">
                                Class Name:
                            </label>
                            <input
                                {...register('title', { required: true })}
                                type="text"
                                id="className"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                            />
                            {errors.className && <span className="text-gray-900">This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="classImage" className="block mb-1 text-white font-medium">
                                Class Image:
                            </label>
                            <input
                                {...register('image', { required: true })}
                                type="text"
                                id="classImage"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                            />
                            {errors.classImage && <span className="text-gray-900">This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="instructorName" className="block mb-1 text-white font-medium">
                                Instructor Name:
                            </label>
                            <input
                                type="text"
                                id="instructorName"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                                value={user.displayName}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="instructorEmail" className="block mb-1 text-white font-medium">
                                Instructor Email:
                            </label>
                            <input
                                type="text"
                                id="instructorEmail"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                                value={user.email}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="availableSeats" className="block mb-1 text-white font-medium">
                                Available Seats:
                            </label>
                            <input
                                {...register('availableSeats', { required: true })}
                                type="number"
                                id="availableSeats"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                            />
                            {errors.availableSeats && <span className="text-gray-900">This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-1 text-white font-medium">
                                Price:
                            </label>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                id="price"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                            />
                            {errors.price && <span className="text-gray-900">This field is required</span>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;
