var Présentation = getElementByID("Présentation");
var PrésentationAudio = getElementByID("Présentation Audio");

function clickHandler() {
  PrésentationAudio.play();
}

function endHandler() {
  alert('ended');
}

Présentation.addEventListener('click', clickHandler, false);
PrésentationAudio.addEventListener('ended', endHandler, false);