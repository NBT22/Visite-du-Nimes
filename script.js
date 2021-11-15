var audio = new Audio("./Audio/Présentation.wav");
audio.addEventListener('ended', endHandler, false);
function endHandler() {
  alert('ended');
}