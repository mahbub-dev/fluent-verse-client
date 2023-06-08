import React from 'react';
import { Fade } from 'react-awesome-reveal';

const InstructorsSection = () => {
    const instructorsData = [
        {
            name: 'John Smith',
            image: 'https://www.lipscomb.edu/sites/default/files/images-staff/2018-11/Smith_John_web2.jpg',
            students: 150,
        },
        {
            name: 'Emma Johnson',
            image: 'https://stagea.blob.core.windows.net/images/photos/emma-johnson-59a0/emma-johnson-g0oe5s4f.p5k.jpg',
            students: 120,
        },
        {
            name: 'Michael Davis',
            image: 'https://i.pinimg.com/564x/03/a7/5b/03a75b1d7e83747dcecd0bb7d76ca94f.jpg',
            students: 100,
        },
        {
            name: 'Sarah Thompson',
            image: 'https://www.tvguide.com/a/img/resize/eed9a955dea375b6885ca45a853ac8c69e13b31a/catalog/provider/1/6/1-172371940.jpg?auto=webp&fit=crop&height=675&width=1200',
            students: 90,
        },
        {
            name: 'David Wilson',
            image: 'https://api.curtisbrown.co.uk/media/86216/show/square',
            students: 80,
        },
        {
            name: 'Olivia Martinez',
            image: 'https://media.licdn.com/dms/image/C4D03AQFf_pqe53pd1g/profile-displayphoto-shrink_800_800/0/1631587739454?e=2147483647&v=beta&t=TQ-UkXs--ldkktADxoAu4-wek543IvRBgdN_elw2l-Y',
            students: 70,
        },
    ];

    const topInstructors = instructorsData.slice(0, 6);

    return (
        <section className="py-10 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Popular Instructors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {topInstructors.map((instructor, index) => (
                        <Fade
                            key={instructor.name}
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
                                    <p className="text-gray-100">{instructor.students} students</p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
