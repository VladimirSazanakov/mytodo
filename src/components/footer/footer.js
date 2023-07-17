import React, { Component } from "react";
import './footer.css';

import TasksFilter from "../tasks-filter";

export default class Footer extends Component {

  render(){
    
    const {onChangeFilter, filter} = this.props;
    //console.log(onChangeFilter);

    return (
      <footer className="footer">
        <span className="todo-count">{this.props.todoNeed} items left</span>
        <TasksFilter onChangeFilter={onChangeFilter}
                      filter={filter} />
        <button className="clear-completed"
                onClick={this.props.clearCompleted}>Clear completed</button>
      </footer>
    );
  };
};
