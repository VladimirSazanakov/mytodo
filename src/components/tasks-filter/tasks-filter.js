import React, { Component } from "react";
import './tasks-filter.css';

export default class TaskFilter extends Component {

  onClick = (event) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(event.target.value);
  }

  render() {
    const { filter } = this.props;
    const allClass = filter === 'All' ? 'selected' : '';
    const activeClass = filter === 'Active' ? 'selected' : '';
    const completedClass = filter === 'Completed' ? 'selected' : '';

    return (
      <ul className="filters"
        onClick={this.onClick}>
        <li>
          <button className={allClass} value='All'>All</button>
        </li>
        <li>
          <button className={activeClass} value='Active'>Active</button>
        </li>
        <li>
          <button className={completedClass} value='Completed'>Completed</button>
        </li>
      </ul>
    );
  };
}
TaskFilter.defaultProps = {
  onChangeFilter: () => { },
}
