/* eslint-disable react/prop-types */
const ClassCard = ({classItem}) => {
  return (
  <div
    key={classItem.id}
    className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${classItem.availableSeats === 0 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-blue-700'
        } bg-opacity-20`}
>
    <img
        src={classItem.image}
        alt={classItem.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
    />
    <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
    <p className="text-gray-100 mb-2">Instructor: {classItem.instructor}</p>
    <p className="mb-2 text-white">
        Available Seats:{' '}
        {classItem.availableSeats === 0 ? (
            <span className="font-bold text-red-500">0</span>
        ) : (
            classItem.availableSeats
        )}
    </p>
    <p className="mb-4 text-white">Price: ${classItem.price}</p>
    <button
        className={`bg-yellow-500 transition-all rounded ${classItem.availableSeats && 'hover:rounded-[50px]'} text-gray-200 rounded py-2 px-4`}
        // disabled={!isLoggedIn || isAdmin || classItem.availableSeats}
    >
        Select
    </button>
</div>
  )
}

export default ClassCard