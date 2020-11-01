
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var BananaGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImag = loadImage("obstacle.png");
 
}



function setup() {  
//createCanvas(600,400)
  
monkey = createSprite(100,350,10,10);
monkey.addAnimation("monkey",monkey_running);  
monkey.scale = 0.1
  
  ground           = createSprite(400,350,1000,10);
  ground.velocityX = -5









bananasGroup   = createGroup();
obstaclesGroup = createGroup();

score = 0;
}

function draw() {
background(220)
  
 if(keyDown("space")&& monkey.y >= 300) {
   monkey.velocityY = -12;
 } 
  
 monkey.velocityY = monkey.velocityY + 0.8 ;
 monkey.collide(ground);  
spawnObstacles();
  spawnBananas();
  
  
  if(ground.x<0){
  ground.x = ground.width/2;
  }
  
  text("Survival Time: " + score,450,50)
  score = score + Math.round(getFrameRate()/60)
  
   if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    bananasGroup.setVelocityXEach(0);
    monkey.velocityX = 0;
    obstaclesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
    }
  
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 120 === 0){
   var obstacle = createSprite(600,330,10,10);
    obstacle.addImage(obstacleImag)
    obstacle.scale   = 0.1
    obstacle.velocityX = -5;
    obstaclesGroup.add(obstacle);
    
    
    
}
}

function spawnBananas(){
  if(frameCount % 120 === 0){
   var bananas = createSprite(600,30,10,10);
    bananas.addImage(bananaImage)
    bananas.scale   = 0.1
    bananas.y = Math.round(random(80,120));
    bananas.velocityX = -5;
    bananasGroup.add(bananas);
    monkey.depth = bananas.depth+1;
    bananas.lifetime = 600;
    
    
}  
}


