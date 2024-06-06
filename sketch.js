//you are doing such a good job following my guidance!
//if you scroll down, you will see what i wrote to produce the distorted mirror. press the play button in the top left to run the code and interact with it. 
//play a recording of any of the guided meditations in the preview window on the right for a referential map of the script that will explain what the code is doing to produce the mirror on the right. 

//* in order to access the recordings without the mirror, comment out line 44 "subject = createCapture(VIDEO);" by adding two forward slashes to the beginning of the line like this: // subject = createCapture(VIDEO);
//if nothing changes, click the play/run button in the top left and consider checking the box next to auto-refresh.

// 
var subject;

// 
var capture;

// 
var minimize = 10;

// 
let voice;

//
var concentrate;

// 
function setup() {
  
  //guide.play();
  
  // 
  createCanvas(640, 480);
  
  // 
  pixelDensity(1);
  
  //  
  subject = createCapture(VIDEO);
  
  // 
  subject.size(width / minimize, height / minimize);
  
  // 
  capture = createImage(subject.width, subject.height);
  
  // 
  voice = new p5.AudioIn();
  
  // 
  voice.start();
}

//

// 
function draw() {
  
  // 
  background(51);
  
  // 
  subject.loadPixels();
  
  // 
  capture.loadPixels();
  
  // 
  for (var y = 0; y < subject.height; y++) {
    
    // 
    for (var x = 0; x < subject.width; x++) {
      
      // 
      var index = (subject.width - x + 1 + (y * subject.width)) * 4;
      
      // 
      var red = subject.pixels[index + 0];
      var green = subject.pixels[index + 1];
      var blue = subject.pixels[index + 2];
      
      // 
      var bright = (red + green + blue) / 3;
      
      // 
      var cred = capture.pixels[index + 0];
      var cgreen = capture.pixels[index + 1];
      var cblue = capture.pixels[index + 2];
      
      // 
      var diff = dist(red, green, blue, cred, cgreen, cblue);
      
      // 
      if (diff < 5){
        
        //
        fill(bright);
        
        // 
      } else {
        
        // 
        fill(cred, cgreen, cblue);
        //fill(255, 0, 0);
      }
      
      //
      var pixel = map(bright, 0, 255, 0, minimize);
      
      // 
      noStroke();
      
      // 
      rectMode(CENTER);
      
      // 
      rect(x * minimize, y * minimize, concentrate * 1000, pixel);
    }
    
  // 
  }
  
 // 
 capture.copy(subject, 0, 0, subject.width, subject.height, 0, 0, subject.width, subject.height);

// 
function listen() {
  
  // 
  concentrate = voice.getLevel();
  
  // 
  if (concentrate * 1000 <= 10) {
    console.log("my power is inherent.")
  } else if (concentrate * 1000 <= 30) {
    console.log("my power is cultivating.")
  } else if (concentrate * 1000 <= 80) {
    console.log("my power is roaring.")
  } else if (concentrate * 1000 <= 120) {
    console.log("my power is singing.")
  } else if (concentrate * 1000 <= 170) {
    console.log("my power is seen.")
  } else if (concentrate * 1000 <= 200) {
    console.log("my power is embodied.")
  } else if (concentrate * 1000 > 250) {
    console.log("my power is our power.")
  }
}
  
// 
listen();
}