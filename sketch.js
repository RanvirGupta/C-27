var bob,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world; 
	//Create the Bodies Here.
    bobObject1= new Bob;
	bobObject2= new Bob;
    bobObject3= new Bob;
    bobObject4= new Bob;

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



