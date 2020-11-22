const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,stone,boy;

function preload()
{
boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800,700);

    engine = Engine.create();
	  world = engine.world;

    ground = createSprite(500,700,20000,100);
    tree = createSprite(500,620,50,1000);
    stone = new Stone(400,620,50,50)
    
   
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  drawSprites();
 
}



