import { useEffect } from 'react'
import { useAuth } from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from '../../Components/ClassCard';

const MyEnrolledClasses = () => {
    const { logOut } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const { isLoading, refetch, data } = useQuery({
        queryKey: ['enrolled'],
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
                <div className="grid md:grid-cols-3 gap-5">
                    {data?.map((classItem) => (
                        <ClassCard key={classItem._id} classItem={classItem} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default MyEnrolledClasses