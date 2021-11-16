var Présentation = new Audio("./Audio/Présentation.wav");

Présentation.addEventListener('ended', endHandler, false);
function endHandler() {
  window.location.href = "./Slides/";
}

var Accueil = new Audio("./Audio/Accueil.wav");

Accueil.addEventListener('ended', endHandler, false);
function endHandler() {
  window.location.href = "./";
}