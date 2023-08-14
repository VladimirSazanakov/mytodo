import React from 'react';
import './footer.css';

import TasksFilter from '../tasks-filter';

export default function Footer(props) {
  const { onChangeFilter, filter, todoNeed, clearCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{todoNeed} items left</span>
      <TasksFilter onChangeFilter={onChangeFilter} filter={filter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
