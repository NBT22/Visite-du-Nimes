var sound = new Audio("file.wav");

a.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});