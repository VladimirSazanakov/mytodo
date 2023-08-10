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
    min: '',
    sec: '',
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
    const sec = Number(event.target.value);
    if (!isNaN(sec)) {
      if (sec > 60) {
        this.setState({
          sec: 59,
        });
      } else {
        this.setState({
          sec: sec,
        });
      }
    } else {
      this.setState({
        sec: 0,
      });
    }
  };

  onSubmit = (event) => {
    const { addNewTask } = this.props;
    event.preventDefault();

    console.log('Submit Button');
    console.log('State: ', this.state);

    addNewTask(this.state);

    this.setState({ label: '', min: '', sec: '' });

  };

  render() {
    return (
      <dir className="new-todo-form">
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            value={this.state.label}
            onChange={this.onChangeInput}
          />
          <input
            className="new-todo-form__timer"
            placeholder="min"
            value={this.state.min}
            onChange={this.onChangeMin}
            onSubmit={this.onSubmit}
          />
          <input
            className="new-todo-form__timer"
            placeholder="sec"
            value={this.state.sec}
            onChange={this.onChangeSec}
            pattern='[0-59]'
            onSubmit={this.onSubmit}
          />
          <input type='submit' style={{ position: 'absolute', visibility: "hidden" }}></input>
        </form>
      </dir>
    );
  }
}
