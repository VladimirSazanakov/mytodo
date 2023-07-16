import React, {Component} from "react";

export default class Task extends Component {

  onCompleted = () =>{

  }

  render() {
    
    const { label, createdDate, completed } = this.props;
    
      return (
      <div className="view">
        <input className="toggle" 
                type="checkbox"  
                onChange={this.props.onChecked}
                checked={completed ? 'checked' : null} />
        <label>
          <span className="description">{label}</span>
          <span className="created">{createdDate}created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  };
};