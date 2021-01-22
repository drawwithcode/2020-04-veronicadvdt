
let myImage;

let data = "Do you beleive in extraterrestrial life?";

let enter;
let inp;

var yesButton;
var notButton;


function preload(){

  alien1 = loadImage("./assets/alien1.jpg");
  alien5 = loadImage("./assets/alien5.png");
  alien4 = loadImage("./assets/alien4.png");
  broke = loadImage("./assets/broke2.jpg");

  font1 = loadFont('assets/VT323.ttf');
  song1 = loadSound("./assets/Kraftwerk.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background("blue");
  typeWriter(data, 0, windowWidth / 3, windowHeight/2 +180, 80);

 yesButton = createButton("YEAH");
 yesButton.position(780);
 yesButton.mousePressed(firstOption);

 notButton = createButton("NAH");
 notButton.position(980);
 notButton.mousePressed(secondOption);

 //playbutton1 + pausebutton1
   playbutton1 = createImg("./assets/stereo1.png");
   playbutton1.style("width", "200px");
   playbutton1.position(width/10, height*2/3);
   playbutton1.mousePressed(playpause1);

   pausebutton1 = createImg("./assets/stereo2.png");
   pausebutton1.style("width", "200px");
   pausebutton1.position(width/10, height*2/3);
   pausebutton1.mousePressed(playpause1);
   pausebutton1.style("visibility", "hidden");
}



function draw() {
  imageMode(CENTER);
  image(alien1, windowWidth / 2, windowHeight / 3);
  cursor(CROSS);
  image(alien4, windowWidth / 2, windowHeight / 3 +60 ,400,400);
  image(stereo, windowWidth / 8, windowHeight*3/4, 260,150);

}


function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    textFont(font1);
    textSize(40);
    fill("white");
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function playpause1() {
  if (song1.isPlaying() == true) {
    song1.pause();
    pausebutton1.style("visibility", "hidden");
    playbutton1.style("visibility", "visible");
  } else {
    song1.loop();
    playbutton1.style("visibility", "hidden");
    pausebutton1.style("visibility", "visible");
  }
}



function firstOption() {
 window.open("https://www.youtube.com/watch?v=adBDwKf_aSE");
}

function secondOption() {
image(broke, windowWidth / 2, windowHeight / 2);
filter(INVERT);
}
