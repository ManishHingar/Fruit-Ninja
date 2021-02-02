var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword, alien, fruit1, fruit2, fruit3,fruit4
var swordImage, alienImage, fruit1Image, fruit2Image, fruit3Image, fruit4Image, gameoverImage

function preload(){
swordImage = loadImage("sword.png")
alienImage = loadImage("alien2.png")
fruit1Image = loadImage("fruit1.png")
fruit2Image = loadImage("fruit2.png")
fruit3Image = loadImage("fruit3.png")
fruit4Image = loadImage("fruit4.png")
gameoverImage = loadImage("gameover.png")
 gameOverSound= loadSound("gameover.mp3") 
swordSound= loadSound("knifeSwooshSound.mp3");

}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  //background = createSprite(0,0,600,600);
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale=0.7;
  score = 0
  fruitGroup=createGroup();
  monsterGroup=createGroup();
}

function draw(){
background("pink");
  if(gameState===PLAY){
  fruits();
  enemy();
 
     sword.y=World.mouseY;
   sword.x=World.mouseX
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
       
    swordSound.play();
  }
  
else {
  if(monsterGroup.isTouching(sword)){
   fruitGroup.destroyEach();
  monsterGroup.destroyEach();
  fruitGroup.velocityX=0;
  monsterGroup.velocityX=0;
  gameState= END;
  sword.addImage(gameoverImage)
  sword.x=200;
  sword.y=200;
    gameOverSound.play();
}
}
}
  text("score:"+score,300,50);
  
    if(score>0 && score % 2 === 0){
    }    
  drawSprites();
}
function fruits() {
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20)
    fruit.scale=0.2
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1Image)
    } else if (r==2){
      fruit.addImage(fruit2Image)
      }else if (r==3){
        fruit.addImage(fruit3Image)
      }else {
        fruit.addImage(fruit4Image)
      }
      fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7
    fruit.setLifetime=100
    fruitGroup.add(fruit)
  }
}
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addImage(alienImage)
    monster.y=Math.round(random(100,300))
    monster.velocityX=-8
    monster.setLifetime=50
    monsterGroup.add(monster)
  }
}
    
  
     
  
  

