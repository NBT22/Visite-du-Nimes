var sound = new Audio("./Audio/Présentation.wav");

a.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});