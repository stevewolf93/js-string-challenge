// get current time
function clock() {
  this.curDate = new Date();
  this.hours = this.curDate.getHours();
  this.minutes = this.curDate.getMinutes();
  this.seconds = this.curDate.getSeconds();
}
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
clock.prototype.run = function () {
  setInterval(this.update.bind(this), 1000);
};
clock.prototype.update = function () {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
clock.prototype.updateTime = function (secs) {
  this.seconds += secs;
  if (this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if (this.minutes >= 60) {
    this.hours++;
    this.minutes = 0;
  }
  if (this.hours >= 24) {
    this.hours = 0;
  }
};
let runningClock = new clock();
runningClock.run();
