function metronome() {
    var audio = document.getElementById("a.mp3");
    audio.play();
    clearInterval(start)
}
function startMetronome(){
    var bpm = document.getElementById("bpm");
    var start;
    start = window.setInterval(function () {
        metronome();
        clearInterval(start)
    }, 60000/bpm.value);

}