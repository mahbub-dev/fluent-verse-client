import { useState } from 'react'
import { FiTrash } from 'react-icons/fi';

const MySelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([
        { id: 1, name: 'English Conversation', instructor: 'John Smith' },
        { id: 2, name: 'Spanish for Beginners', instructor: 'Emma Johnson' },
    ]);
    const handleDeleteClass = (classId) => {
        setSelectedClasses((prevClasses) =>
            prevClasses.filter((c) => c.id !== classId)
        );
    };

    return (
        <section>
            <h3 className="text-2xl font-bold mb-4">My Selected Classes</h3>
            {selectedClasses.length === 0 ? (
                <p>No selected classes.</p>
            ) : (
                <ul className="space-y-4">
                    {selectedClasses.map((classItem) => (
                        <li
                            key={classItem.id}
                            className="flex items-center justify-between bg-white rounded-lg p-4 shadow"
                        >
                            <div>
                                <h4 className="font-semibold">{classItem.name}</h4>
                                <p>Instructor: {classItem.instructor}</p>
                            </div>
                            <div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteClass(classItem.id)}
                                >
                                    <FiTrash className="inline-block" />
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
                                    disabled
                                >
                                    Pay
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default MySelectedClasses