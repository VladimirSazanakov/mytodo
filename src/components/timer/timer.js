import React, { Component } from "react";
import './timer.css';

export default class Timer extends Component {

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.props.onTimerPlay}></button>
        <button className="icon icon-pause" onClick={this.props.onTimerPause}></button>
        <span className="timer-value">12:45</span>
      </span>

    )
  }
}