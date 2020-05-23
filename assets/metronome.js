function metronome(bpm) {
    var audio = document.getElementById("a.mp3");
    while(true){
        var date = new Date();
        audio.play();
        while((new Date() - date) < ((60/bpm)*1000));
    }

}
function startMetronome(){
    var bpm = document.getElementById("bpm");

    metronome(bpm.value);
}