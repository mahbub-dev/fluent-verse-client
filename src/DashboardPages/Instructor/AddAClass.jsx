
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Hooks/useAuth';

const AddAClass = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // const classData = {
        //     className: data.className,
        //     classImage: data.classImage,
        //     instructorName: user.displayName,
        //     instructorEmail: user.email,
        //     availableSeats: parseInt(data.availableSeats),
        //     price: parseFloat(data.price),
        //     status: 'pending',
        // };
    }
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
                                {...register('className', { required: true })}
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
                                {...register('classImage', { required: true })}
                                type="text"
                                id="classImage"
                                className="w-full p-2 outline-none bg-gray-300 rounded"
                            />
                            {errors.classImage && <span className="text-gray-900">This field is required</span>}
                        </div>
                        {/* Add more fields here */}
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
    )
}


export default AddAClass