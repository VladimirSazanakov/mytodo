import React from 'react';

import NewTaskForm from '../new-task-form';
import './header.css';

export default function Header({ addNewTask = () => {} }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addNewTask={addNewTask} />
    </header>
  );
}
