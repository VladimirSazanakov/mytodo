import React, { Component } from 'react';
import ReactDom from 'react-dom';
//import { formatDistanceToNow } from 'date-fns';
import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';

export default class App extends Component {

  count = 10;

  state = {
    todoData: [
      //{ label: 'Completed Tack', completed: true, editing: false, createdDate: null, id: 3 },
      //{ label: 'Editing Tack', completed: false, editing: true, createdDate: null, id: 2 },
      //{ label: 'Active Tack', completed: false, editing: false, createdDate: null, id: 1 },
    ],
    filter: 'All',
  }

  createNewTask = (label) => {
    console.log(this.count);
    this.count += 1;
    const currentDate = new Date();
    console.log (currentDate);
    console.log(this.count);
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
      console.log('created.new task', this.count);
      const newTask = this.createNewTask(label);

      const newArr = [...todoData, newTask];
      console.log(this.state.todoData);
      return { todoData: newArr };

    })

  }

  onCompleted = (id) => {
    console.log("Task Completed", id);

    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id == id);
      //console.log(idElement);
      const oldTask = todoData[idElement];
      const NewTask = { ...oldTask, completed: !oldTask['completed'] };
      const NewArr = [...todoData.slice(0, idElement), NewTask, ...todoData.slice(idElement + 1)];
      return { todoData: NewArr };
    })
  }

  onDeleteTask = (id) => {
    console.log('Task Must Be Deleted', id);
    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id == id);
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
    console.log(filterValue);
    this.setState(({ filter }) => {
      return { filter: filterValue }
    })
  }

  onEditBtn = (id) => {
    console.log('button edi push ', id);
    this.setState(({ todoData }) => {
      const idElement = todoData.findIndex(el => el.id == id);
      const newTask = {...todoData[idElement], editing: true};
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement+1)];
      return {todoData: newArr};
    })
  }

  onEditSubmit = (id, value) => {
    console.log('Edit Submit',id, value);
    this.setState(({todoData})=>{
      const idElement= todoData.findIndex(el=>el.id==id);
      const newTask = {...todoData[idElement], value: value, editing: false};
      const newArr = [...todoData.slice(0, idElement), newTask, ...todoData.slice(idElement+1)]
      return {todoData: newArr};
    })
  }


  render() {

    /*
    const todoData = [
      { label: 'Completed Tack', completed: true, editing: false, createdData: null },
      { label: 'Editing Tack', completed: false, editing: true, createdData: null },
      { label: 'Active Tack', completed: false, editing: false, createdData: null },
    ];
  */
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