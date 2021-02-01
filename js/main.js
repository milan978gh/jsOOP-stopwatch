/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};
circle.draw();
*/
/*
// factory function
function createCircle(radius) {
  return {
    //ES5
    // radius:radius,
    // ES6
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}
const circle = createCircle(1);
circle.draw();
*/
/*
// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}
const circle = new Circle(1);
*/

const count = document.querySelector('.count');
const btns = document.querySelectorAll('.btn');
let duration = 0;
let startTime, stopTime = 0;

btns.forEach((btn) => {
  btn.onclick = () => {
    const swState = btn.classList.contains('start') ? start() :
      btn.classList.contains('stop') ? stop() :
    reset();
    count.textContent = swState;
  };
});

function start() {
  startTime = new Date();
  stopTime = 0;
  return duration;
}
function stop() {
  stopTime = new Date();
  const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
  return duration;
}
function reset() {
  startTime = 0;
  stopTime = 0;
  duration = 0;
  return duration;
}
