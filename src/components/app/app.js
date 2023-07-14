import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { formatDistanceToNow } from 'date-fns';
import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';

export default class App extends Component {

  count = 10;

  state = {
    todoData: [
      { label: 'Completed Tack', completed: true, editing: false, createdData: null, id: 3 },
      { label: 'Editing Tack', completed: false, editing: true, createdData: null, id: 2 },
      { label: 'Active Tack', completed: false, editing: false, createdData: null, id: 1 },
    ],
  }

  createNewTask = (label) => {
    return {
      label,
      completed: false,
      editing: false,
      createdData: new Date,
      id: this.count ++,

    }
  }

  addNewTask = (label) =>{
    const newTodoData = {...todoData, createNewTask(label)};
    return newTodoData;
  }


  render() {

    /*
    const todoData = [
      { label: 'Completed Tack', completed: true, editing: false, createdData: null },
      { label: 'Editing Tack', completed: false, editing: true, createdData: null },
      { label: 'Active Tack', completed: false, editing: false, createdData: null },
    ];
  */
    return (
      <div className="App">
        <Header />
        <section className='main'>
          <TaskList todo={this.state.todoData} />
          <Footer />
        </section>
      </div>
    );
  }
}