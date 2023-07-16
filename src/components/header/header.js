import React, {Component} from 'react';
import NewTaskForm from '../new-task-form';
import './header.css';

export default class Header extends Component {

  render (){
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addNewTask={this.props.addNewTask}/>
      
    </header>
);
};
};
