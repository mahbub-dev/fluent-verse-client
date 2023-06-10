import React from 'react';

const PaymentHistory = () => {
    const payments = [
        { id: 1, amount: 50.0, date: '2023-06-01' },
        { id: 2, amount: 75.0, date: '2023-05-28' },
        { id: 3, amount: 30.0, date: '2023-05-25' },
      ];
    
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-white">Payment History</h1>
    
          {payments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-900 text-white ">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b font-semibold text-left">Payment ID</th>
                    <th className="py-2 px-4 border-b font-semibold text-left">Class Name</th>
                    <th className="py-2 px-4 border-b font-semibold text-right">Amount</th>
                    <th className="py-2 px-4 border-b font-semibold text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="py-2 px-4 border-b">{payment.id}</td>
                      <td className="py-2 px-4 border-b">{payment.id}</td>
                      <td className="py-2 px-4 border-b text-right">${payment.amount.toFixed(2)}</td>
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
