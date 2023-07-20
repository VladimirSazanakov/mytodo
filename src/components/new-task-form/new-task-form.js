import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addNewTask: () => { },
  };

  static propTypes = {
    addNewTask: PropTypes.func,
  };

  state = {
    label: '',
  };

  onChangeInput = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { addNewTask } = this.props;
    event.preventDefault();
    addNewTask(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
          onChange={this.onChangeInput}
        />
      </form>
    );
  };
};
