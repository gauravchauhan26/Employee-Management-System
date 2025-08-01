import React, { useState , useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDescription , setTaskDescription] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [assignTo , setAssignTo] = useState('')
  const [category , setCategory] = useState('')

   const [newTask , setNewTask] =useState({})

    const submitHandler = (e)=>{
       e.preventDefault()
       
       setNewTask({taskTitle ,taskDescription ,taskDate ,category ,active:false , newTask:true , failed:false, Complete:false})

    
     // Create new updated userData (immutable way)
  const updatedUsers = userData.map((user) => {
    if (assignTo === user.firstName) {
      const updatedTasks = [...user.tasks, newTask];
      const updatedTaskNumber = {
        ...user.taskNumber,
        newTask: user.taskNumber.newTask + 1,
      };
      return {
        ...user,
        tasks: updatedTasks,
        taskNumber: updatedTaskNumber,
      };
    }
    return user;
  });

  setUserData(updatedUsers);
  console.log(updatedUsers); // ✅ updated correctly

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
       
    }

  return (
     <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
        <form onSubmit={(e)=>{
             submitHandler(e)
        }} 
             className="flex w-full flex-wrap items-start justify-between"
            >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input value={taskTitle} onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input value={taskDate} onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input value={assignTo} onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input value={category} onChange={(e)=>{
                setCategory(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Design , Dev , Etc" />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
               className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
          </div>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
