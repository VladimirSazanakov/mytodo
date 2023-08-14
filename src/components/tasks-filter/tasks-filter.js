import React from 'react';
import './tasks-filter.css';

export default function TaskFilter(props) {
  const onClick = (event) => {
    const { onChangeFilter } = props;
    onChangeFilter(event.target.value);
  };

  const { filter } = props;
  const allClass = filter === 'All' ? 'selected' : '';
  const activeClass = filter === 'Active' ? 'selected' : '';
  const completedClass = filter === 'Completed' ? 'selected' : '';

  return (
    <ul className="filters" onClick={onClick}>
      <li>
        <button className={allClass} value="All">
          All
        </button>
      </li>
      <li>
        <button className={activeClass} value="Active">
          Active
        </button>
      </li>
      <li>
        <button className={completedClass} value="Completed">
          Completed
        </button>
      </li>
    </ul>
  );
}
