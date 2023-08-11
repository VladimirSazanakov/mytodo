export default class timerService {
  constructor(min = 0, sec = 0) {
    this.min = min;
    this.sec = sec;
    this.interval;
    this.expiredTime = () => {};
    this.displayTimer = () => {};
  }
  substructSec = () => {
    if (this.sec <= 0) {
      if (this.min <= 0) {
        clearInterval(this.interval);
      } else {
        this.min--;
        this.sec = 59;
      }
    } else {
      this.sec--;
    }

    console.log(this.min, ':', this.sec);

    this.displayTimer();
  };

  start = () => {
    if (!this.interval) {
      this.interval = setInterval(this.substructSec, 1000);
    }
  };

  pause = () => {
    clearInterval(this.interval);
    this.interval = undefined;
  };

  getTime = () => {
    return {
      minute: this.min,
      seconds: this.sec,
    };
  };

  setTimerDisplay = (timerDisplayFunc) => {
    this.displayTimer = timerDisplayFunc;
  };
}
