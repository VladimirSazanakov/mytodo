import React, { Component } from 'react';
//import ReactDom from 'react-dom';

import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';

export default class App extends Component {

  count = 10;

  state = {
    todoData: [],
    filter: 'All',
  }

  createNewTask = (label) => {
    this.count += 1;
    const currentDate = new Date();
    return {
      label,
      completed: false,
      editing: false,
      createdDate: currentDate,
      id: this.count,
    }
  }

  addNewTask = (label) => {
    this.setState(({ todoData }) => {
      const newTask = this.createNewTask(label);
      const newArr = [...todoData, newTask];
      return { todoData: newArr };
    })
  }

  onCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id === id);
      const oldTask = todoData[idElement];
      const NewTask = { ...oldTask, completed: !oldTask['completed'] };
      const NewArr = [...todoData.slice(0, idElement), NewTask, ...todoData.slice(idElement + 1)];
      return { todoData: NewArr };
    })
  }

  onDeleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id === id);
      const newArr = [...todoData.slice(0, idElement), ...todoData.slice(idElement + 1)];
      return { todoData: newArr }
    })
  }

  onClearCompleted = () => {
    console.log('Need clear ol completed');
    this.setState(({ todoData }) => {
      const newArr = todoData.filter(el => !el.completed);
      return { todoData: newArr }
    })
  };

  onChangeFilter = (filterValue) => {
    this.setState(() => {
      return { filter: filterValue }
    })
  }

  onEditBtn = (id) => {
    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id === id);
      const newTask = {...todoData[idElement], editing: true};
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement+1)];
      return {todoData: newArr};
    })
  }

  onEditSubmit = (id, value) => {
    this.setState(({todoData})=>{
      const idElement= todoData.findIndex(el=>el.id === id);
      const newTask = {...todoData[idElement], label: value, editing: false};
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement+1)];
      return {todoData: newArr};
    })
  }

  render() {

    const todoNeed = this.state.todoData
      .filter((el) => !el.completed)
      .length;

    return (
      <div className="App">
        <Header addNewTask={this.addNewTask} />
        <section className='main'>
          <TaskList todo={this.state.todoData}
            onCompleted={this.onCompleted}
            onDeleteTask={this.onDeleteTask}
            filter={this.state.filter}
            onEditBtn={this.onEditBtn}
            onEditSubmit={this.onEditSubmit} />
          <Footer todoNeed={todoNeed}
            clearCompleted={this.onClearCompleted}
            onChangeFilter={this.onChangeFilter}
            filter={this.state.filter} />
        </section>
      </div>
    );
  }
}