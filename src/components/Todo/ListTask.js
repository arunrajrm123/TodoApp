import React, { useState } from 'react'

const ListTask = ({ tasks,index,removeTask,editTask ,updateTask}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [editedTitle, setEditedTitle] = useState(tasks.title);
  
    const handleEdit = () => {
      setIsEditable(true);
    };
  
    const handleSave = () => {
      updateTask(index, editedTitle);
      setIsEditable(false);
    };
  
    const handleInputChange = (e) => {
      setEditedTitle(e.target.value);
    };
  
  return (
    <>
    {/* <div className='list-task'>
      <div className='task-text'>{tasks.title}</div>
      <div className='button-group'>
        <button onClick={() => removeTask(index)} className='delete-btn'>
          Delete
        </button>
        <button onClick={()=>editTask(index)} className='edit-btn'>Edit</button>
      </div>
    </div> */
    <div className='list-task'>
        {isEditable ? (
          <input
            type='text'
            value={editedTitle}
            onChange={handleInputChange}
            className='task-text-editable'
          />
        ) : (
          <div className='task-text'>{tasks.title}</div>
        )}
        <div className='button-group'>
          <button onClick={() => removeTask(index)} className='delete-btn'>
            Delete
          </button>
          {isEditable ? (
            <button onClick={handleSave} className='save-btn'>
              Save
            </button>
          ) : (
            <button onClick={handleEdit} className='edit-btn'>
              Edit
            </button>
          )}
        </div>
      </div>
    }
    </>
  )
}

export default ListTask