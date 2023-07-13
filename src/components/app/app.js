import React from 'react';
import ReactDom from 'react-dom';
import './app.css';

import Header from '../header/';
import TaskList from '../task-list';
import Footer from '../footer/';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='main'>
        <TaskList/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
