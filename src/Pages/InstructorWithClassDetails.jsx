import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from '../Components/ClassCard';
import { FaUserCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import ClassAddRemoveBtn from '../Components/ClassAddRemoveBtn';
const InstructorWithClassDetails = () => {
    const { user } = useAuth()
    const params = useParams()
    const { data, refetch } = useQuery({
        queryKey: ['instructorWithClassDetails'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/instructor/${params.id}`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="bg-blue-500 py-6 mb-10 rounded">
                <div className="container mx-auto flex md:flex-row flex-col gap-5  items-center justify-between px-4">
                    <div className="flex md:flex-row flex-col  items-center">
                        <div className="mr-4">
                            {data?.instructor?.image
                                ? <img className="w-[100px] h-[100px] rounded-full text-white" src={data?.instructor?.image} alt={data?.instructor?.name} /> :
                                <FaUserCircle className="w-[100px] h-[100px] text-white" />}
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-semibold">
                                {data?.instructor?.name}
                            </h1>
                            <p className="text-white text-sm capitalize">{data?.instructor?.role}</p>
                            <p className='text-white text-sm'>Total Classes : {data?.classes.length}</p>
                        </div>
                    </div>
                    <div>
                        <p className="flex items-center text-white text-sm">
                            <FaEnvelope className="mr-2" />
                            {data?.instructor?.email}
                        </p>
                        <p className="flex items-center text-white text-sm">
                            <FaPhone className="mr-2" />
                            {data?.instructor?.phoneNumber}
                        </p>
                        <p className="flex items-center text-white text-sm">
                            <FaMapMarkerAlt className="mr-2" />
                            {data?.instructor?.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.classes?.map((classItem) => (
                    <ClassCard classItem={classItem} key={classItem._id} >
                        <ClassAddRemoveBtn refetch={refetch} classItem={classItem} />
                    </ClassCard>
                ))}
            </div>
        </div>
    );
};

export default InstructorWithClassDetails;
