song1 = "passion.mp3";
song2 = "lofi.mp3";

function preload() {
    song1 = loadSound("passion.mp3");
    song2 = loadSound("lofi.mp3");
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,300);
}

function stop() {
    song1.stop();
    song2.stop();
}

function play() {
    song2.play();
}
//It will play the first song.When wrist is raised,it will play 'song2'//
