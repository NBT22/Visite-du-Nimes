var links = document.getElementsByID('Présentation'),
        audio = document.getElementById('Présentation Audio'),
    clickHandler = function () {
        audio.play();
    }
;

for (var i in links) {
    links[i].addEventListener('click', clickHandler);
}