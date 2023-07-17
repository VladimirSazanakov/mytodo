import React, { Component } from "react";

import './task-list.css';

import Task from '../task/';

export default class TaskList extends Component {

  state = { editingTask: [] };

  onSubmitEdit = (event) => {
    event.preventDefault();
    //console.log(event.target);
    //console.log('Edit Task', event.target.editInput.value);
    //console.log(event.target.editInput);
    console.log(this.state);
    this.props.onEditSubmit(event.target.editInput.dataset.id, event.target.editInput.value);
  };

  onChangeEditing = (event) => {
    let value = event.target.value;
    console.log(event.target.value);
    event.target.value += value;

  }

  addToEditingTask = (id, value) => {
    this.setState(({ editingTask }) => {
      const newTask = { id, value };
      const newArr = [...editingTask, newTask];
      return ({ editingTask: newArr });
    })
  }

  render() {
    const { todo, filter, onCompleted, onDeleteTask, onEditBtn } = this.props;

    const elements = todo.map(task => {
      const liClassName = task.completed ? 'completed' : task.editing ? 'editing' : '';
      
      const inputEdit = task.editing ? <form onSubmit={this.onSubmitEdit}>
        <input type="text"
          name="editInput"
          data-id={task.id}
          className="edit"
          value={task.value}
          onChange={this.onChangeEditing}
        >
        </input>
      </form> : null;

      console.log(filter);
      const valid = (filter == 'All') ||
        (filter == 'Active' && !task.completed) ||
        (filter == 'Completed' && task.completed);

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
      }
    });

    return (
      <ul className="todo-list">
        {elements}
      </ul>
    );
  };
};

