import React, { Component } from "react";
import PropTypes from 'prop-types';
import './timer.css';

export default class Timer extends Component {
  static defaultProps = {
    timer: null,
  };

  static propTypes = {
    timer: PropTypes.instanceOf(setInterval),
  };

  state = {
    minute: 0,
    seconds: 0,
  }

  timer = this.props.timer;

  componentDidMount() {
    if (this.props.timer) {
      this.setState(this.props.timer.getTime());
      this.timer.setTimerDisplay(this.updateTime);
    }
  }

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


    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onClickStart}></button>
        <button className="icon icon-pause" onClick={this.onClickPause}></button>
        <span className="timer-value">{this.state.minute}:{this.state.seconds}</span>
      </span>

    )
  }
}