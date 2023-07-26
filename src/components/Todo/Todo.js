import React, { useEffect } from 'react'
import "./Todo.css"
import { useState } from 'react'
import  AddTask  from './AddTask'
import ListTask from './ListTask'
const Todo = () => {
const [task,setTask]=useState([]);
        const addTask=(title)=>{
        const newTask=[...task,{title}]
        setTask(newTask)
        
}
const removeTask=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1);
    setTask(newTask)
}

const updateTask = (index, updatedTitle) => {
    const newTask = [...task];
    newTask[index].title = updatedTitle;
    setTask(newTask);
  };

let d=`you have ${task.length}pending task`

  return (
    
    <> 
    <div className='todo-container' >
    <div className='header'>TODO APP{}</div>

    <div className='addtask'><AddTask addTask={addTask}/>
   
    </div>

    <div className='task-list'>
    {task.map((tasks,index)=>(<ListTask tasks={tasks} removeTask={removeTask} index={index} key={index}  editTask={() => setTask(tasks.map((task, i) => (i === index ? { ...task, isEditable: true } : task)))}
              updateTask={updateTask}/>))}
   
    </div>
    </div>
     </>
    
  )
}

export default Todo