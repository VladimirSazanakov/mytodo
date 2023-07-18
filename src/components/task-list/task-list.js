import React, { Component } from "react";

import './task-list.css';

import Task from '../task/';
import InputEdit from '../input-edit/'

export default class TaskList extends Component {


  render() {
    const { todo, filter, onCompleted, onDeleteTask, onEditBtn, onEditSubmit } = this.props;

    const elements = todo.map((task) => {

      const liClassName = task.completed ? 'completed' : task.editing ? 'editing' : '';
      const inputEdit = task.editing ? <InputEdit label={task.label} id={task.id} onEditSubmit={onEditSubmit} /> : null;

      const valid = (filter === 'All') ||
        (filter === 'Active' && !task.completed) ||
        (filter === 'Completed' && task.completed);

      if (valid) {
        return (
          <li key={task.id} className={liClassName}>
            <Task label={task.label}
              createdDate={task.createdDate}
              completed={task.completed}
              onChecked={() => onCompleted(task.id)}
              onDeleteTask={() => onDeleteTask(task.id)}
              onEditBtn={() => onEditBtn(task.id)} />
            {inputEdit}
          </li>
        )
      } else {
        return null;
      }

    });

    return (
      <ul className="todo-list">
        {elements}
      </ul>
    );
  };
};

TaskList.defaultProps = {
  todo: [],
  filter: 'All',
  onCompleted: () => { },
  onDeleteTask: () => { },
  onEditBtn: () => { },
  onEditSubmit: () => { },

}
