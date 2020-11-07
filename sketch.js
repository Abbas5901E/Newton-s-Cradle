
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var diameter;
var ground1;
var rope1;
var rope2;
var rope3;
var rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(200, 550);
	bobObject2 = new bob(330, 550);
	bobObject3 = new bob(460, 550);
	bobObject4 = new bob(590, 550);

	diameter = 110;

	ground1 = new ground(390, 100, 600, 60);

	 rope1 = new chain(bobObject1.body, ground1.body, -diameter*2, 0);
	 rope2 = new chain(bobObject2.body, ground1.body, -diameter*1, 0);
	 rope3 = new chain(bobObject3.body, ground1.body, 0, 0);
	 rope4 = new chain(bobObject4.body, ground1.body, diameter*1, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  ground1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.position, {x:-115, y:-115});
	}
}

