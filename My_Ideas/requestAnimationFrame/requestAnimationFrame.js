// Rectangle
var start = null;
var element = document.getElementById("rectangle");

console.log(element);

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 2000) + "px)";
  if (progress < 2500) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

// Digits
let prev = performance.now();
let times = 0;

requestAnimationFrame(function measure(time) {
  document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
  prev = time;

  if (times++ < 10) requestAnimationFrame(measure);
});

// Circle

function animate({ duration, timing, draw  }) {
  let start = 0;

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    console.log('Start '+ start);
    
    console.log('Time ' + time);
    
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

var circle = document.getElementById("circle");

circle.onclick = () => {
  animate({
    duration: 3000,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      console.log(progress);
      circle.style.transform ="translateX(" + progress * 1000 + "px)";
    }
  });
}