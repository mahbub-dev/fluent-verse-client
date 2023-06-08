import React from 'react';

const classesData = [
    {
        id: 1,
        name: 'English Conversation',
        image: 'https://example.com/english-conversation.jpg',
        instructor: 'John Smith',
        availableSeats: 5,
        price: 50,
    },
    {
        id: 2,
        name: 'Spanish for Beginners',
        image: 'https://example.com/spanish-beginners.jpg',
        instructor: 'Emma Johnson',
        availableSeats: 0,
        price: 60,
    },
    // Add more class data here
];

const ClassesPage = ({ isLoggedIn, isAdmin }) => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classesData.map((classItem) => (
                    <div
                        key={classItem.id}
                        className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${classItem.availableSeats === 0 ? 'bg-red-500' : 'bg-gray-300'
                            } bg-opacity-20`}
                    >
                        <img
                            src={classItem.image}
                            alt={classItem.name}
                            className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
                        <p className="text-gray-900 mb-2">Instructor: {classItem.instructor}</p>
                        <p className="mb-2">
                            Available Seats:{' '}
                            {classItem.availableSeats === 0 ? (
                                <span className="font-bold text-red-500">0</span>
                            ) : (
                                classItem.availableSeats
                            )}
                        </p>
                        <p className="mb-4">Price: ${classItem.price}</p>
                        <button
                            className={`bg-gray-500 ${classItem.availableSeats && 'hover:bg-gray-600'} text-white rounded py-2 px-4`}
                            disabled={!isLoggedIn || isAdmin || classItem.availableSeats}
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
