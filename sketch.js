
let start;
let alien;
let alienenemy;
let alienenemyimage;
let alienimage;
let backgroundimage;
let startbuttonimage;
let arma;
let armaimage;
let gamestate="start";

function preload() {
  alienimage=loadImage("./assets/alienBlue.png");
  backgroundimage=loadImage("./assets/background.png");
  startbuttonimage=loadImage("./assets/start_button.png");  
  armaimage=loadImage("./assets/ray.png");
  alienenemyimage=loadImage("./assets/alien.png");
}


function setup() {
  createCanvas(1200, 800);

  
  start = createSprite(600,500);
  start.addImage(startbuttonimage);
  start.scale=0.5;
  
  alienenemy = createSprite(200,600);
  alienenemy.addImage(alienenemyimage);
  alienenemy.scale=0.125;
  alienenemy.visible=false;

  alien = createSprite(600,600);
  alien.addImage(alienimage);
  alien.scale=0.125;   
  alien.visible=false;       
}

function draw() {
 
  image(backgroundimage,0,0,width,height)
  
  
  if(gamestate=="start"){
    fill("black");
    textSize(100);
    text("The Last Survivor",250, 350); 
  }
  
  if(gamestate=="play"){
    if(keyDown('right')){
      alien.x+=5;
    }

    if(keyDown('left')){
      alien.x+=-5;

    }
    if(alien.isTouching(alienenemy)){
      gamestate='gameover';
    }
  }


   if(mousePressedOver(start)) {
    inicio();  
  }
  if(gamestate=='gameover'){
    fill("red");
      textSize(100);
      text("GAME OVER",250, 350);  
    
    }
      
  drawSprites();
}

function inicio() {
   gamestate='play';
  start.visible = false;
  alien.visible = true;
  alienenemy.visible = true;
  
}

