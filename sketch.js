var backgroundimg;
var ballimg;
var player1img, player2img;
var bottomboundry, bottomboundry2;

function preload(){
  backgroundimg = loadImage("assets/background.jpg");
  ballimg = loadImage("assets/ftbl.png");
  player1img = loadImage("assets/player1.png"); 
  player2img = loadImage("assets/player1.png");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ball = createSprite(width/2,height-150);
  ball.addImage("ball", ballimg);
  ball.scale = 0.04

  player1 = createSprite(150,height-137,30,30);
  player1.addImage("player1", player1img);
  player1.scale = 0.25

  player2 = createSprite(width-100,height-137);
  player2.addImage("player2", player2img);
  player2.scale = 0.25;

  bottomboundry = createSprite(width/2,height-20,width,20)
  bottomboundry.visible = false;

  bottomboundry2 = createSprite(width/2,height/2 + 80,width,20)
  bottomboundry2.visible = false;
  
  


}


function draw() {
  background(backgroundimg);
  if(keyDown("right")){
    player1.x += 10;

  }
  

  
  
 
  drawSprites();
}


function keyPressed(){
  if(keyCode==UP_ARROW){
    ball.velocityX = 5
    ball.velocityY = 3
  }
}

