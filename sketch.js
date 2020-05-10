var raindrops =[];

var i1, i2, i3, i4, i5, i6;

function preload(){
 i1 = loadImage("m3.jpg");
 i2 = loadImage("m4.jpg");
 i3 = loadImage("m2.jpg"); 
 i4 = loadImage("m1.jpg"); 
 i5 = loadImage("m6.jpg"); 
 i6 = loadImage("m5.jpg");
}

function setup() {
  createCanvas(800,600);
  
  for (var i = 0; i < 250; i++) {
    raindrops[i] = new raindrop();
  }
  
}

function draw() {
  fill(0); 
  stroke(0);
  strokeWeight(1);
  textSize(20);
  text("press spacebar",300,570);
  
  if(keyCode === 32){
  background(0);  

  
    for(var i = 0; i < raindrops.length; i++){
    raindrops[i].rainfall();
    raindrops[i].display();
  }
  
  fill(255);
  stroke(255);
  strokeWeight(5);
  textSize(60);
  text("Happy Mother's Day",150,300);

  textSize(30);
  strokeWeight(2);
  text("Press alphabets i love u in order", 100,450);
}

//i
if(keyCode === 105){
  background(i1);
}
 
//l
if(keyCode === 108){
  background(i2);
}

//o
if(keyCode === 111){
  background(i3);
}

//v
if(keyCode === 118){
  background(i4);
}

//e
if(keyCode === 101){
  background(i5);
}

//u
if(keyCode === 117){
  background(i6);
}

  drawSprites();
}

