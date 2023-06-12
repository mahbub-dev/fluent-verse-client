import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';
import Loader from '../../Components/Loader';

const PaymentHistory = () => {
    const { logOut } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['paymenthistory'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/payments`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(() => {
        refetch()
    }, [refetch])

    if (isLoading) {
        return <Loader />
       
    }
    return (
        <div className="container mx-auto ">
            <h1 className="text-2xl font-bold mb-4 text-white">Payment History</h1>
            {data?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white ">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b font-semibold text-left">Payment ID</th>
                                <th className="py-2 px-4 border-b font-semibold text-left">Class Name</th>
                                <th className="py-2 px-4 border-b font-semibold text-right">Amount</th>
                                <th className="py-2 px-4 border-b font-semibold text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((payment) => (
                                <tr key={payment._id}>
                                    <td className="py-2 px-4 border-b">{payment.transactionId}</td>
                                    <td className="py-2 px-4 border-b">{payment.itemNames?.map((i, ind) => <span key={ind}>{i} </span>)}</td>
                                    <td className="py-2 px-4 border-b text-right">${payment?.price?.toFixed(2)}</td>
                                    <td className="py-2 px-4 border-b text-right">{payment.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className='text-gray-200'>No payment history found.</p>
            )}
        </div>
    );
};

export default PaymentHistory;
