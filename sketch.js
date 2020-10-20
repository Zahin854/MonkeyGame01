
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  console.log(ground.x)
  
obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
background("white")

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  spawnObstacles();
  spawnFood();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:"+survivalTime,200,100);
  drawSprites();
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,315,10,40);
   obstacle.velocityX = -(3);         
   obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);

 }
}

function spawnFood() {
  
  if (frameCount % 80 === 0) {
     banana = createSprite(400,200,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale =  0.1;
    banana.velocityX = -3;
   FoodGroup.add(banana);
    }
}






