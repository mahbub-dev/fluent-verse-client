/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form';
const AddForm = ({ user, children, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    return (

        <div className="max-w-[800px] w-full bg-white p-8 rounded shadow-lg bg-gradient-to-r from-gray-500 to-gray-700">
            <h2 className="text-2xl font-bold text-center text-white mb-4">Create a Class</h2>
            <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="className" className="block mb-1 text-white font-medium">
                            Class Name:
                        </label>
                        <input
                            {...register('title', { required: true, value: user?.title })}
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
                            {...register('image', { required: true, value: user?.image })}
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
                            value={user.instructor_name || user.displayName}
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
                            {...register('availableSeats', { required: true, value: user?.availableSeats })}
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
                            {...register('price', { required: true, value: user?.price })}
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
                    {children}
                </button>
            </form>
        </div>

    );
};

export default AddForm;
