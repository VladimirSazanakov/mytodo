import React, { useState } from 'react';
import './input-edit.css';

export default function InputEdit(props) {
  const id = props.id;
  const [label, setLabel] = useState(props.label);

  const onSubmitEdit = (event) => {
    event.preventDefault();
    props.onEditSubmit(id, label);
  };

  const onChangeEditing = (event) => {
    setLabel(event.target.value);
  };

  return (
    <form onSubmit={onSubmitEdit}>
      <input type="text" name="editInput" className="edit" value={label} onChange={onChangeEditing}></input>
    </form>
  );
}
