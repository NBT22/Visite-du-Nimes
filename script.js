var Présentation = new Audio("./Audio/Présentation.wav");
Présentation.addEventListener('ended', endHandler, false);
function endHandler() {
  window.location.href = "./Slides/";
}