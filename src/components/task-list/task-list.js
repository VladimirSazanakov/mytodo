import React from "react";
import './task-list.css';

import Task from '../task/';

const TaskList = ({todo}) =>{

  const elements = todo.map(task => {
    const liClassName = task.completed ? 'completed' : task.editing ? 'editing' : '';
    const inputEdit = task.editing ? <input type="text" className="edit" value="Editing task"></input> : null;
    
    return (
      <li className={liClassName}>
        <Task label={task.label} createdData={task.createdData}/>
        {inputEdit}
      </li>
    )
  })

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TaskList;
