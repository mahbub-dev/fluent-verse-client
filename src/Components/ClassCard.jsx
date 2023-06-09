import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import Swal from "sweetalert2"
import useAxiosSecure from "../Hooks/useAxiosSecure"

/* eslint-disable react/prop-types */
const ClassCard = ({ classItem }) => {
    const { logOut, user, setUser } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]

    const navigate = useNavigate()
    const handleClassSelection = async () => {
        try {
            if (!user) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Login',
                    text: 'Please login before select'
                })
                navigate('/login', { state: { from: location } })
                return
            }
            await axiosSecure.put(`/user/select-class/${classItem._id}`,)
            Swal.fire({
                icon: 'success',
                title: 'Selected',
                text: 'Class selected successfully'
            })
            setUser(p => {
                p['selectedClasses'].push(classItem._id)
                return { ...p, }
            })
        } catch (error) {
            console.log(error)
        }

    }
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
            <button
                className={`transition-all rounded ${classItem.availableSeats && !user?.selectedClasses?.includes(classItem._id) ? 'hover:rounded-[50px] bg-yellow-500':'bg-yellow-600'} text-gray-200 rounded py-2 px-4`}
                disabled={!user?.role === 'student' || !classItem.availableSeats || user?.selectedClasses?.includes(classItem._id)}
                onClick={handleClassSelection}
            >
                {user?.selectedClasses?.includes(classItem._id) ? 'Selected' : 'Select'}
            </button>
        </div>
    )
}

export default ClassCard