import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import Loader from './Loader';

const InstructorsSection = () => {
    const { isLoading, error, data: instructorsData } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/user/instructor`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    const topInstructors = instructorsData?.slice(0, 6);
    return (
        <section className="py-10 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Popular Instructors
                </h2>
                {
                    isLoading ? <Loader /> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {topInstructors?.map((instructor, index) => (
                                <Fade
                                    key={instructor._id}
                                    cascade
                                    direction="up"
                                    damping={0.2}
                                    delay={index * 100}
                                    triggerOnce
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l cursor-pointer shadow-lg rounded-lg p-6 flex flex-col items-center">
                                        <div className="mb-4">
                                            <img
                                                src={instructor.image}
                                                alt={instructor.name}
                                                className="w-32 h-32 object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl text-white font-semibold mb-2">
                                                {instructor.name}
                                            </h3>
                                            <p className="text-gray-100">{instructor.students || Math.floor(Math.random() * 200)} students</p>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                }
            </div>
        </section>
    );
};

export default InstructorsSection;

