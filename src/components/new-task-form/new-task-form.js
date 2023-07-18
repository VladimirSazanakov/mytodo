import React, { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  
  state = {
    label: '',
  }

  onChangeInput = (event) => {
    this.setState({
      label: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNewTask(this.state.label);
    this.setState({ label: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus 
                value={this.state.label} 
                onChange={this.onChangeInput} />
      </form>
    );
  };
};

