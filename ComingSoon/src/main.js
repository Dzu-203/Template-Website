const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const time = {
  day: 9,
  hour: 30,
  minute: 25,
  second: 10,

  updateDisplay: function() {
    days.innerHTML = this.formatTime(this.day);
    hours.innerHTML = this.formatTime(this.hour);
    minutes.innerHTML = this.formatTime(this.minute);
    seconds.innerHTML = this.formatTime(this.second);
  },

  formatTime: function(timeValue) {
    return timeValue < 10 ? `0${timeValue}` : timeValue;
  },

  tick: function() {
    this.second--;
    if (this.second === 0) {
      this.second = 60;
      this.minute--;
    }
    if (this.minute === 0) {
      this.minute = 60;
      this.hour--;
    }
    if (this.hour === 0) {
      this.hour = 60;
      this.day--;
    }
    if (this.day === 0) {
      clearInterval(timeming);
    }
    this.updateDisplay();
  }
};

let timeming = setInterval(() => {
  time.tick();
}, 1000);