import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { formatDistanceToNow } from 'date-fns';
import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';

export default class App extends Component {

  render() {

    const todoData = [
      { label: 'Completed Tack', completed: true, editing: false, createdData: null },
      { label: 'Editing Tack', completed: false, editing: true, createdData: null },
      { label: 'Active Tack', completed: false, editing: false, createdData: null },
    ];

    return (
      <div className="App">
        <Header />
        <section className='main'>
          <TaskList todo={todoData} />
          <Footer />
        </section>
      </div>
    );
  }
}