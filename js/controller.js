var acc = document.getElementsByClassName("accordion");
const scrollContainer = document.querySelector('main');
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

scrollContainer.addEventListener('wheel', (evt) => {
  // The magic happens here.
  console.log(evt)
});