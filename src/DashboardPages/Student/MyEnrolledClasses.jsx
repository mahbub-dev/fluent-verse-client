import { useEffect, useState } from 'react'
import { useAuth } from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const { logOut } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const { isLoading, refetch, data } = useQuery({
        queryKey: ['classesPage'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/classes`)
                // setEnrolledClasses(res?.data?.filter(i => i.isEnrolled))
                return res?.data?.filter(i => i.isEnrolled)
            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(() => {
        refetch()
    }, [refetch])
    return (
        <section className="mt-4">
            <h3 className="text-2xl font-bold mb-4 text-white">My Enrolled Classes</h3>
            {data?.length === 0 ? (
                <p>No enrolled classes.</p>
            ) : (
                <ul className="space-y-4">
                    {data?.map((classItem) => (
                        <li
                            key={classItem?._id}
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