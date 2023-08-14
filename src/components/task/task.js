import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import Timer from '../timer/timer';

export default function Task(props) {
  const { label, createdDate, completed, onDeleteTask, onEditBtn, onChecked, timer } = props;
  const timeString = formatDistanceToNow(createdDate, { includeSeconds: true });

  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onChecked} checked={completed ? 'checked' : null} />
      <label>
        <span className="title">{label}</span>
        <span className="description">
          <Timer timer={timer} />
        </span>
        <span className="description">created {timeString} ago</span>
      </label>
      <button className="icon icon-edit" onClick={onEditBtn}></button>
      <button className="icon icon-destroy" onClick={onDeleteTask}></button>
    </div>
  );
}
