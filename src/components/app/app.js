import React from 'react';
import ReactDom from 'react-dom';
import './app.css';

import Header from '../header/';
import TaskList from '../task-list';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='main'>
        <TaskList/>

      </section>
      <p>Hello React</p>
    </div>
  );
}

export default App;
