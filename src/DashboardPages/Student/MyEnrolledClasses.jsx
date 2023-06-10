import { useState } from 'react'

const MyEnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([
        { id: 3, name: 'French Cuisine', instructor: 'Michael Davis' },
        { id: 3, name: 'French Cuisine', instructor: 'Michael Davis' },
    ]);
    return (
        <section className="mt-4">
            <h3 className="text-2xl font-bold mb-4 text-white">My Enrolled Classes</h3>
            {enrolledClasses.length === 0 ? (
                <p>No enrolled classes.</p>
            ) : (
                <ul className="space-y-4">
                    {enrolledClasses.map((classItem) => (
                        <li
                            key={classItem.id}
                            className="bg-white rounded-lg p-4 shadow"
                        >
                            <h4 className="font-semibold">{classItem.name}</h4>
                            <p>Instructor: {classItem.instructor}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default MyEnrolledClasses