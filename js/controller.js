var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const scrollContainer = document.getElementById('main');
const scrollTarget = document.getElementById('target');

scrollContainer.addEventListener('wheel', (evt) => {
  scrollTarget.scrollLeft += evt.deltaY;
  // throttle(500,evt)
});

function throttle( timeFrame,evt) {
  var lastTime = 0;
  return function () {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
      scrollTarget.scrollLeft += evt.deltaY;
      lastTime = now;
    }
  };
}

var multiply = document.getElementById("multiply");
var i;

for (i = 0; i < 30; i++) {
  const clone = multiply.cloneNode(true);
  document.getElementById("target").appendChild(clone);
}
