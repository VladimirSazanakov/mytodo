import React, {Component} from "react";
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {

  render() {
    
    const { label, createdDate, completed, onDeleteTask, onEditBtn} = this.props;
    const timeString = formatDistanceToNow((createdDate), {includeSeconds: true});
    
      return (
      <div className="view">
        <input className="toggle" 
                type="checkbox"  
                onChange={this.props.onChecked}
                checked={completed ? 'checked' : null} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {timeString} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onEditBtn}></button>
        <button className="icon icon-destroy" onClick={onDeleteTask}></button>
      </div>
    );
  };
};