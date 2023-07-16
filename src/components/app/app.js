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
    console.log(this.count);
    this.count +=1;
    console.log(this.count); 
    return {
      label,
      completed: false,
      editing: false,
      createdData: new Date,
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
    this.setState(({todoData})=>{
      const idElement = todoData.findIndex(el=>el.id ==id);
      const newArr = [...todoData.slice(0, idElement), ...todoData.slice(idElement+1)];
      return {todoData: newArr}
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
    return (
      <div className="App">
        <Header addNewTask={this.addNewTask} />
        <section className='main'>
          <TaskList todo={this.state.todoData}
            onCompleted={this.onCompleted} 
            onDeleteTask={this.onDeleteTask}/>
          <Footer />
        </section>
      </div>
    );
  }
}