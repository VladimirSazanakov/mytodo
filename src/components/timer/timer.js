import React, { useEffect, useState } from 'react';
import './timer.css';

export default function Timer(props) {
  const timer = props.timer;

  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (timer) {
      const { minute, seconds } = timer.getTime();
      setMinute(minute);
      setSeconds(seconds);
      timer.setTimerDisplay(() => updateTime());
    }
  }, []);

  const updateTime = () => {
    const { minute, seconds } = timer.getTime();
    setMinute(minute);
    setSeconds(seconds);
  };

  const onClickStart = () => {
    timer.start();
  };

  const onClickPause = () => {
    timer.pause();
  };

  return (
    <span className="description">
      <button className="icon icon-play" onClick={onClickStart}></button>
      <button className="icon icon-pause" onClick={onClickPause}></button>
      <span className="timer-value">
        {minute}:{seconds}
      </span>
    </span>
  );
}
