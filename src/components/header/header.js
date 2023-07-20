import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../new-task-form';
import './header.css';

export default class Header extends Component {
  static defaultProps = {
    addNewTask: () => {},
  };

  static propTypes = {
    addNewTask: PropTypes.func,
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addNewTask={this.props.addNewTask} />
      </header>
    );
  }
}
