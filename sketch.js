var player1,player2,backgroundImg,platform,bullet1,bullet2;
var player1img,player2img,start,startimg;
var score1 = 0, score2 = 0;
var gamestate = "start";




function preload() {
  backgroundImg = loadImage("Sprites/bg_img.jpg");

  player1img = loadImage("Sprites/Player_1.png");
  player2img = loadImage("Sprites/Player_2.png");
  startimg = loadImage("Sprites/start.jpg");
  
}

function setup() {
  createCanvas(1800,900);
  //createSprite(400, 200, 50, 50);
  player1 = createSprite(560,600,50,50);
  player1.addImage(player1img);
  player1.scale=0.2

  player2 = createSprite(1400,600,50,50);
  player2.addImage(player2img);
  player2.scale=0.4

  //start.addImage(startimg);

  bullet1 = createSprite(10000,10000,20,10);
  bullet2 = createSprite(10,10,20,10);


 // background = createSprite(0,0,2000,1000);
 // background.addImage(backgroundImg);
  // background.scale =5
}

function draw() {
  background(backgroundImg);  
  if (gamestate == "start") {
    
    image(startimg,1,1,1800,900);

    if (keyCode === 32) {
     gamestate = "play";
   }
  }
  if(gamestate == "play"){
  if (bullet1.isTouching(player2)) {
    player1.x =560
    player1.y =600
    player2.x =1400
    player2.y =600 

    bullet1.x = 10000;
    bullet1.y = 10000;

    bullet2.x = 10000;
    bullet2.y = 10000;
    
     score1 = score1 + 1;
  }

  if (bullet2.isTouching(player1)) {
    player1.x =560
    player1.y =600
    player2.x =1400
    player2.y =600    
    score2 = score2 + 1;

    bullet1.x = 10000;
    bullet1.y = 10000;

    bullet2.x = 10000;
    bullet2.y = 10000;
  }
   textSize(20);
   text(score1, 800,100);
   

   text(score2, 1000,100);
   if (score1 == 10 || score2 == 10) {
    gamestate = "end"
  }

  if(gamestate == "end"){
    
    reset();
    
 }
  drawSprites();
}
}
  function keyPressed()  {

    if (keyCode === LEFT_ARROW) {
     
       player1.x = player1.x - 10;
    }
   
    if (keyCode === RIGHT_ARROW) {
      
      player1.x = player1.x + 10;
    }
    if (keyCode === UP_ARROW) {
     
      player1.y = player1.y - 10;
   }
  
   if (keyCode === DOWN_ARROW) {
     
     player1.y = player1.y + 10;
   }

   if (keyCode === 65) {
     
    player2.x = player2.x - 10;
 }

 if (keyCode === 68) {
   
   player2.x = player2.x + 10;
 }
 if (keyCode === 87) {
  
   player2.y = player2.y - 10;
}

if (keyCode === 83) {
  
  player2.y = player2.y + 10;
}
if (keyCode === 32) {
  bullet2.x = player2.x;
  bullet2.y = player2.y;
  bullet2.velocityX = -50;
}
if (keyCode === SHIFT) {
  bullet1.x = player1.x;
  bullet1.y = player1.y;
  bullet1.velocityX = 50;
}

}
  
  function reset() {

    gamestate = "play";
    score1 = 0;
    score2 = 0;
   
  }


