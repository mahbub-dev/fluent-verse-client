/* eslint-disable no-unused-vars */
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import useAxiosSecure from "../Hooks/useAxiosSecure"

/* eslint-disable react/prop-types */
const ClassCard = ({ classItem, children }) => {
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]
    return (
        <div
            className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${classItem.availableSeats === 0 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-blue-700'
                } `}
        >
            <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
            {pathname !== "instructors" && <p className="text-gray-100 mb-2">Instructor: {classItem.instructor}</p>}
            <p className="mb-2 text-white">
                Available Seats:{' '}
                {classItem.availableSeats}
            </p>
            <p className="mb-4 text-white">Price: ${classItem.price}</p>
            {children}
        </div>
    )
}

export default ClassCard