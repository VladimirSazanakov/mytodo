import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input-edit.css';

export default class InputEdit extends Component {

  static defaultProps = {
    id: 0, 
    label: '',
  };

  static propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
  }

  state = {
    id: this.props.id,
    label: this.props.label,
  }

  onSubmitEdit = (event) => {
    event.preventDefault();
    this.props.onEditSubmit(this.state.id, this.state.label)
  };

  onChangeEditing = (event) => {
    this.setState({ label: event.target.value })
  }

  render() {

    return (
      <form onSubmit={this.onSubmitEdit}>
        <input type="text"
          name="editInput"
          className="edit"
          value={this.state.label}
          onChange={this.onChangeEditing}
        >
        </input>
      </form>
    )
  }
}

