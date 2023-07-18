import React, { Component } from 'react';
import './input-edit.css';

export default class InputEdit extends Component {

  state = {
    id: this.props.id,
    label: this.props.label,
  }

  onSubmitEdit = (event) => {
    event.preventDefault();
    //console.log(event.target);
    //console.log('Edit Task', event.target.editInput.value);
    //console.log(event.target.editInput);
    console.log(this.state);
    this.props.onEditSubmit(this.state.id, this.state.label)
  };

  onChangeEditing = (event) => {
    this.setState({label: event.target.value})

  }

 render (){

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