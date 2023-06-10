/* eslint-disable react/prop-types */
import React from 'react';

const SelectedClassCard = ({ data,handleDeleteClass }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-[150px] object-cover"
        src={data?.image}
        alt="Course"
      />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">{data?.title}</div>
        <p><b>Instructor</b>:{data?.instructor}</p>
        <p className="text-gray-700 text-base ">Available Seats: {data?.availableSeat}</p>
        <p className="text-gray-700 text-base ">Price: {data?.price}</p>
        <p className="text-gray-700 text-base ">Students: {data?.students}</p>
        <div className="flex justify-between">
          <button onClick={()=>handleDeleteClass(data?._id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default SelectedClassCard;
