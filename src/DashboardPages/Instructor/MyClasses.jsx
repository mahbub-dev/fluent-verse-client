
const MyClasses = () => {
  const classes = [
    {
      id: 1,
      className: 'Class A',
      status: 'Pending',
      enrolledStudents: 0,
      feedback: '',
    },
    {
      id: 2,
      className: 'Class B',
      status: 'Approved',
      enrolledStudents: 10,
      feedback: '',
    },
    {
      id: 3,
      className: 'Class C',
      status: 'Denied',
      enrolledStudents: 5,
      feedback: 'Insufficient class details.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Enrolled Students
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feedback
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.className}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.enrolledStudents}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.feedback}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
