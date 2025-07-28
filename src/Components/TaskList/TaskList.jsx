import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) { // fixed
          return <NewTask key={idx} data={elem} />
        }
        if (elem.Complete) { // fixed
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) { // fixed
          return <FailedTask key={idx} data={elem} />
        }
        return null; // fallback to prevent undefined return
      })}
    </div>
  )
}

export default TaskList
