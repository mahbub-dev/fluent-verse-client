import { useState } from 'react';

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: 'Class A',
      instructorName: 'John Doe',
      instructorEmail: 'john.doe@example.com',
      availableSeats: 10,
      price: 50,
      status: 'Pending',
    },
    {
      id: 2,
      className: 'Class B',
      instructorName: 'Jane Smith',
      instructorEmail: 'jane.smith@example.com',
      availableSeats: 5,
      price: 75,
      status: 'Pending',
    },
    // Add more class objects as needed
  ]);

  const approveClass = (id) => {
    // Logic to update the status of the class to 'Approved'
    // Disable the 'Approve' and 'Deny' buttons
  };

  const denyClass = (id) => {
    // Logic to update the status of the class to 'Denied'
    // Disable the 'Approve' and 'Deny' buttons
  };

  const sendFeedback = (id) => {
    // Logic to open modal or navigate to feedback page for the selected class
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={classItem.classImage}
              alt="Class Image"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{classItem.className}</h3>
            <p className="text-gray-600 mb-2">
              Instructor: {classItem.instructorName}
            </p>
            <p className="text-gray-600 mb-4">
              Email: {classItem.instructorEmail}
            </p>
            <div className="flex flex-col mb-4">
              <p className="text-gray-600">
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="text-gray-600">Price: ${classItem.price}</p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="text-gray-600">Status: {classItem.status}</p>
              <div className="mt-2 flex space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={classItem.status !== 'Pending'}
                  onClick={() => approveClass(classItem.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={classItem.status !== 'Pending'}
                  onClick={() => denyClass(classItem.id)}
                >
                  Deny
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => sendFeedback(classItem.id)}
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
