import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tasks-filter.css';

export default class TaskFilter extends Component {
  static defaultProps = {
    onChangeFilter: () => {},
    filter: 'All',
  };

  static propTypes = {
    onChangeFilter: PropTypes.func,
    filter: PropTypes.string,
  };

  onClick = (event) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;
    const allClass = filter === 'All' ? 'selected' : '';
    const activeClass = filter === 'Active' ? 'selected' : '';
    const completedClass = filter === 'Completed' ? 'selected' : '';

    return (
      <ul className="filters" onClick={this.onClick}>
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
}
