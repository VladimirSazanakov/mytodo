import React, { Component } from "react";
import './timer.css';

export default class Timer extends Component {

  state = this.props.timer.getTime();

  timer = this.props.timer;


  updateTime = () => {
    const { minute, seconds } = this.timer.getTime();
    this.setState({ minute: minute, seconds: seconds });
  }

  onClickStart = () => {
    console.log('button timer ClickStart');
    // this.updateTime();
    this.timer.start();
  }

  onClickPause = () => {
    console.log('button timer ClickPause');
    // this.updateTime();
    this.timer.pause();
  }

  render() {
    // const { getTimer } = this.props;
    //console.log(this.props);
    // const timer = getTimer();
    // console.log(this.timer);
    // this.updateTime(timer);

    this.timer.setTimerDisplay(this.updateTime);


    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onClickStart}></button>
        <button className="icon icon-pause" onClick={this.onClickPause}></button>
        <span className="timer-value">{this.state.minute}:{this.state.seconds}</span>
      </span>

    )
  }
}