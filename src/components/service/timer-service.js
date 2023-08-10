export default class timerService {
  constructor(min = 0, sec = 0, expiredTime, displayTimer) {
    this.min = min;
    this.sec = sec;
    this.interval;
    this.expiredTime = expiredTime;
    this.displayTimer = displayTimer;
  }
  substructSec = () => {

    if (this.sec === 0) {
      if (this.min === 0) {
        clearInterval(this.interval);
        // this.expiredTime();
      } else {
        this.min--;
        this.sec = 59;
      }
    } else {
      this.sec--;

    }

    // if (this.min === 0 && this.sec === 0) {
    //   clearInterval(this.interval);
    //   // this.expiredTime();
    // }

    // console.log(this.min, ":", this.sec);
    this.displayTimer();
  }

  start = () => {
    //console.log(this.expiredTime);
    //console.log(this.displayTimer);
    this.interval = setInterval(this.substructSec, 1000);
  }

  pause = () => {
    clearInterval(this.interval);
  }

  getTime = () => {
    return {
      'minute': this.min,
      'seconds': this.sec
    }
  }

}