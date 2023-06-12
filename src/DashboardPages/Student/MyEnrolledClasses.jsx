import { useEffect } from 'react'
import { useAuth } from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from '../../Components/ClassCard';
import Loader from '../../Components/Loader';

const MyEnrolledClasses = () => {
    const { logOut } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const {  refetch,isLoading, data } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/enrolled-classes`)
                return res?.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(() => {
        refetch()
    }, [refetch])
    if (isLoading) {
        return  <Loader />
    }
    return (
        <section>
            <h3 className="text-2xl font-bold mb-4 text-white">My Enrolled Classes</h3>
            {data?.length === 0 ? (
                <p className='text-gray-200'>No enrolled classes.</p>
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