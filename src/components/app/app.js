import React, { useState } from 'react';

import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';
import timerService from '../service/timer-service';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [count, setCount] = useState(10);

  //timer

  const timerPause = (id) => {
    const timer = getTimer(id);
    timer.pause();
  };

  const getTimer = (id) => {
    const idElement = todoData.findIndex((el) => el.id === id);
    const Element = todoData[idElement];
    return Element.timer;
  };

  //end test timer

  const createNewTask = ({ label, min, sec }) => {
    setCount((count) => {
      return count + 1;
    });
    const currentDate = new Date();
    const newTask = {
      label,
      completed: false,
      editing: false,
      createdDate: currentDate,
      id: count,
      timer: new timerService(min, sec),
    };
    return newTask;
  };

  const addNewTask = (taskProps) => {
    console.log('Add new task');
    setTodoData((todoData) => {
      const newTask = createNewTask(taskProps);
      const newArr = [...todoData, newTask];
      return newArr;
    });
  };

  const onCompleted = (id) => {
    timerPause(id);
    setTodoData((todoData) => {
      const idElement = todoData.findIndex((el) => el.id === id);
      const oldTask = todoData[idElement];
      const NewTask = { ...oldTask, completed: !oldTask['completed'] };
      const NewArr = [...todoData.slice(0, idElement), NewTask, ...todoData.slice(idElement + 1)];
      return NewArr;
    });
  };

  const onDeleteTask = (id) => {
    timerPause(id);
    setTodoData((todoData) => {
      const idElement = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idElement), ...todoData.slice(idElement + 1)];
      return newArr;
    });
  };

  const onClearCompleted = () => {
    todoData
      .filter((el) => el.completed)
      .map((el) => {
        onDeleteTask(el.id);
      });
  };

  const onChangeFilter = (filterValue) => {
    setFilter(() => {
      return filterValue;
    });
  };

  const onEditBtn = (id) => {
    setTodoData((todoData) => {
      const idElement = todoData.findIndex((el) => el.id === id);
      const newTask = { ...todoData[idElement], editing: true };
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement + 1)];
      return newArr;
    });
  };

  const onEditSubmit = (id, value) => {
    setTodoData((todoData) => {
      const idElement = todoData.findIndex((el) => el.id === id);
      const newTask = { ...todoData[idElement], label: value, editing: false };
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement + 1)];
      return newArr;
    });
  };

  const todoNeed = todoData.filter((el) => !el.completed).length;

  return (
    <div className="App">
      <Header addNewTask={addNewTask} />
      <section className="main">
        <TaskList
          todo={todoData}
          onCompleted={onCompleted}
          onDeleteTask={onDeleteTask}
          filter={filter}
          onEditBtn={onEditBtn}
          onEditSubmit={onEditSubmit}
          getTimer={getTimer}
        />
        <Footer todoNeed={todoNeed} clearCompleted={onClearCompleted} onChangeFilter={onChangeFilter} filter={filter} />
      </section>
    </div>
  );
}
