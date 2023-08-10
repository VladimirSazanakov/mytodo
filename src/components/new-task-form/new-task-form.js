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
    min: 0,
    sec: 0,
  };

  onChangeInput = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onChangeMin = (event) => {
    this.setState({
      min: event.target.value,
    });
  };

  onChangeSec = (event) => {
    this.setState({
      sec: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { addNewTask } = this.props;
    event.preventDefault();
    addNewTask(this.state);
    this.setState({ label: '', min: 0, sec: 0 });

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
        <input
          className="new-todo-form-timer"
          placeholder="min"
          value={this.state.min}
          onChange={this.onChangeMin}
        />
        <input
          className="new-todo-form-timer"
          placeholder="sec"
          value={this.state.sec}
          onChange={this.onChangeSec}
        />
      </form>
    );
  }
}
