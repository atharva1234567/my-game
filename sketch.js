
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var hero;
function preload()
{
c1i=loadImage("images/c1.png")
c2i=loadImage("images/c2.png")
c3i=loadImage("images/c3.png")

di=loadImage("images/d.jpg")
diamondi=loadImage("images/diamond.jpg")
lavai=loadImage("images/lava.jpg")
ni=loadImage("images/n.jpg")
wini=loadImage("images/win bg.jpg")
rti=loadImage("images/rt.png")
lti=loadImage("images/lt.png")
}

function setup() 
{
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

  x1 = createSprite(200,300,20,20);
  x1.addImage(c1i);
  x1.visible = false;

  x2 = createSprite(500,300,20,20);
  x2.addImage(c2i);
  x2.visible = false;

  x3 = createSprite(800,300,20,20);
  x3.addImage(c3i);
  x3.visible = false;

  
  ld = createSprite(1400,300,20,20);
  ld.addImage(lti);
  ld.visible = false;

  

  
  rd = createSprite(60,300,20,20);
  rd.addImage(rti);
  rd.visible = false;
rd.scale=0.3
  


  
}


function draw() 
{
 
  background(0);
 
  drawSprites();

  if(gameState === 0)
  {
    chooseCharacter();
   
  }
  if(gameState === 1)
  {
    ld.visible = true;
  
    rd.visible = true;
  
    hero.scale=0.5
    hero.x=750
    hero.y=60
    if(keyDown(UP_ARROW))
    {
      hero.y-=5;
    }
    if(keyDown(DOWN_ARROW))
    {
      hero.y +=5;
    }
    if(keyDown(LEFT_ARROW))
    {
      hero.x -=5;
    }
    if(keyDown(RIGHT_ARROW))
    {
      hero.x +=5
    }


  }

 
}
function chooseCharacter()
{
  x1.visible = true;
  x2.visible = true;
  x3.visible = true;
  if(mousePressedOver(x1))
  {
    hero = x1;
    console.log("hello");
    x2.destroy();
    x3.destroy();
    gameState= 1;
  }
  else if(mousePressedOver(x2))
  {
    hero = x2;
    console.log("hello");
    x1.destroy();
    x3.destroy();
    gameState= 1;
  }
  else if(mousePressedOver(x3))
  {
    hero = x3;
    console.log("hello");
    x1.destroy();
    x2.destroy();
    gameState= 1;
  }
}
