import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addNewTask: () => {},
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
    const min = parseInt(event.target.value);
    if (isNaN(min)) {
      this.setState({ min: 0 });
    } else {
      this.setState({
        min: min,
      });
    }
  };

  onChangeSec = (event) => {
    const sec = Number(event.target.value);
    if (!isNaN(sec)) {
      if (sec >= 60) {
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

    // console.log('Submit Button');
    // console.log('State: ', this.state);
    let { label, min, sec } = this.state;

    if (min === '') min = 0;
    if (sec === '') sec = 0;

    addNewTask({ label: label, min: min, sec: sec });

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
            required
            value={this.state.label}
            onChange={this.onChangeInput}
          />
          <input
            className="new-todo-form__timer"
            placeholder="min"
            value={this.state.min}
            maxLength={3}
            pattern="^\d+$"
            onChange={this.onChangeMin}
            onSubmit={this.onSubmit}
          />
          <input
            className="new-todo-form__timer"
            placeholder="sec"
            value={this.state.sec}
            onChange={this.onChangeSec}
            maxLength={2}
            pattern="^\d+$"
            onSubmit={this.onSubmit}
          />
          <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }}></input>
        </form>
      </dir>
    );
  }
}
