import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';

const PaymentHistory = () => {
    const payments = [
        { id: 1, amount: 50.0, date: '2023-06-01' },
        { id: 2, amount: 75.0, date: '2023-05-28' },
        { id: 3, amount: 30.0, date: '2023-05-25' },
    ];
    const { logOut, user } = useAuth()
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
    return (
        <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 to-blue-700">
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
                                    <td className="py-2 px-4 border-b">{payment.itemNames?.map((i,ind)=><span key={ind}>{i} </span>)}</td>
                                    <td className="py-2 px-4 border-b text-right">${payment?.price?.toFixed(2)}</td>
                                    <td className="py-2 px-4 border-b text-right">{payment.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No payment history found.</p>
            )}
        </div>
    );
};

export default PaymentHistory;
