import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

import TasksFilter from '../tasks-filter';

export default class Footer extends Component {
  static defaultProps = {
    onChangeFilter: () => {},
    filter: 'All',
  };

  static propTypes = {
    onChangeFilter: PropTypes.func,
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
    todoNeed: PropTypes.number,
    clearCompleted: PropTypes.func,
  };

  render() {
    const { onChangeFilter, filter, todoNeed, clearCompleted } = this.props;

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
}
