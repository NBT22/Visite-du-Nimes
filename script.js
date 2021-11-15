var x = document.getElementById("Présentation Audio"); 

x.onended  = function(){
  window.location.href = "./Slides/";
}

function playAudio() { 
x.play();

}