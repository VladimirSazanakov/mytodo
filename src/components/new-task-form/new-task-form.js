import React, { useState } from 'react';
import './new-task-form.css';

export default function NewTaskForm(props) {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onChangeInput = (event) => {
    setLabel(event.target.value);
  };

  const onChangeMin = (event) => {
    const min = parseInt(event.target.value);
    if (isNaN(min)) {
      setMin(0);
    } else {
      setMin(min);
    }
  };

  const onChangeSec = (event) => {
    const sec = Number(event.target.value);
    if (!isNaN(sec)) {
      if (sec >= 60) {
        setSec(59);
      } else {
        setSec(sec);
      }
    } else {
      setSec(0);
    }
  };

  const onSubmit = (event) => {
    const { addNewTask } = props;
    event.preventDefault();

    // console.log('Submit Button');
    // console.log('State: ', this.state);
    let labelLocal = label;
    let minLocal = min;
    let secLocal = sec;

    if (minLocal === '') minLocal = 0;
    if (secLocal === '') secLocal = 0;

    addNewTask({ label: labelLocal, min: minLocal, sec: secLocal });
    setLabel('');
    setMin('');
    setSec('');
  };

  return (
    <dir className="new-todo-form">
      <form onSubmit={onSubmit}>
        <input className="new-todo" placeholder="Task" autoFocus required value={label} onChange={onChangeInput} />
        <input
          className="new-todo-form__timer"
          placeholder="min"
          value={min}
          maxLength={3}
          pattern="^\d+$"
          onChange={onChangeMin}
          onSubmit={onSubmit}
        />
        <input
          className="new-todo-form__timer"
          placeholder="sec"
          value={sec}
          onChange={onChangeSec}
          maxLength={2}
          pattern="^\d+$"
          onSubmit={onSubmit}
        />
        <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }}></input>
      </form>
    </dir>
  );
}
