var canvas;
var form,game;
var database;
var pname;
var gameState = 0;

function preload(){
  
  panda = loadImage("panda.jpg");
  world = loadImage("world.jpg");
  Earth = loadImage("unnamed.jpg");
  dino1 = loadImage("dino.jpg");
  animal = loadImage("animals.jpg");
  cross = loadImage("cross.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database=firebase.database();
  form = new Form();
  game = new Game();
}

function draw(){
  background(Earth);
  form.display();

  form.mousePressed();
  form.button3.mousePressed();

  game.getState();
  drawSprites();
  
}


