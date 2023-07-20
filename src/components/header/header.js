import React, { Component } from 'react';
import NewTaskForm from '../new-task-form';
import PropTypes from 'prop-types';
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
