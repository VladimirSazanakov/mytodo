import React, {Component} from "react";
import './task-list.css';

import Task from '../task/';

export default class TaskList extends Component {

 render (){
    const {todo, filter, onCompleted, onDeleteTask} = this.props;

    const elements = todo.map(task => {
      const liClassName = task.completed ? 'completed' : task.editing ? 'editing' : '';
      const inputEdit = task.editing ? <input type="text" className="edit" value="Editing task"></input> : null;
      console.log(filter);
      const valid = (filter == 'All')||
                    (filter=='Active'&&!task.completed)||
                    (filter=='Completed'&&task.completed); 
     
      if(valid){

      return (
        <li key={task.id} className={liClassName}>
          <Task label={task.label} 
                createdData={task.createdData} 
                completed={task.completed} 
                onChecked={()=>onCompleted(task.id)}
                onDeleteTask={()=>onDeleteTask(task.id)}/>
          {inputEdit}
        </li>
      )
      }
    });

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};
};

