import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1C1C1C] p-4 mt-5 rounded'>

      {/* Header Row */}
      <div className='bg-gray-800 mb-2 py-2 px-4 rounded'>
        <div className='w-full flex justify-between items-center px-5'>
          <h2 className='text-lg font-semibold text-white w-1/5'>Employee Name</h2>
          <h3 className='text-lg font-semibold text-white w-1/5'>New Task</h3>
          <h5 className='text-lg font-semibold text-white w-1/5'>Active Task</h5>
          <h5 className='text-lg font-semibold text-white w-1/5'>Completed</h5>
          <h5 className='text-lg font-semibold text-white w-1/5'>Failed</h5>
        </div>
      </div>

      {/* Data Rows */}
      <div className=''>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className='border-2 border-emerald-400 mb-2 py-2 px-4 rounded' >
            <div className='w-full flex justify-between items-center px-5 ml-6'>
              <h2 className='text-lg font-medium text-white w-1/5'>{elem.firstName}</h2>
              <h3 className='text-lg font-medium text-blue-400 w-1/5'>{elem.taskNumber.newTask}</h3>
              <h5 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskNumber.active}</h5>
              <h5 className='text-lg font-medium text-green-400 w-1/5'>{elem.taskNumber.completed}</h5>
              <h5 className='text-lg font-medium text-red-400 w-1/5'>{elem.taskNumber.failed}</h5>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllTask
