import React, { Component } from "react";

export default class timer extends Component {

  render() {
    return (
      <span className="description">
        <button className="icon icon-play"></button>
        <button className="icon icon-pause"></button>
        <span className="timer-value">12:45</span>
      </span>

    )
  }
}