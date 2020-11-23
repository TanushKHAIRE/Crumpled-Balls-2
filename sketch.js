
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
var paper,dustbin ;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = createSprite(200,200,20,20);
	dustbin = createSprite(300,100,20,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



