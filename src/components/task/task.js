import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

export default class Task extends Component {
  static defaultProps = {
    label: '',
    createdDate: new Date(),
    completed: false,
    onDeleteTask: () => {},
    onEditBtn: () => {},
    onChecked: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    createdDate: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
    onDeleteTask: PropTypes.func,
    onEditBtn: PropTypes.func,
    onChecked: PropTypes.func,
  };

  render() {
    const { label, createdDate, completed, onDeleteTask, onEditBtn, onChecked } = this.props;
    const timeString = formatDistanceToNow(createdDate, { includeSeconds: true });

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onChecked} checked={completed ? 'checked' : null} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {timeString} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onEditBtn}></button>
        <button className="icon icon-destroy" onClick={onDeleteTask}></button>
      </div>
    );
  }
}
