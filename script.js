var x = document.getElementById("Présentation"); 

x.onended  = function(){
  window.location.href = "./Slides/";
}

function playAudio() { 
x.play();

}